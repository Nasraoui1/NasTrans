import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const LIMITS = { name: 100, email: 200, phone: 30, company: 150, subject: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limitation simple en mémoire : 5 envois / 10 min par IP (par instance serveur).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/** Nettoie une valeur : chaîne, trim, longueur max ; sans retours à la ligne si `singleLine`. */
function clean(value: unknown, max: number, singleLine = true) {
    if (typeof value !== 'string') return '';
    const v = singleLine ? value.replace(/[\r\n]+/g, ' ') : value;
    return v.trim().slice(0, max);
}

function field(label: string, value: string, extra = '') {
    if (!value) return '';
    return `
<tr><td style="padding-bottom: 15px;">
  <p style="margin: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">${label}</p>
  <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${extra || escapeHtml(value)}</p>
</td></tr>`;
}

export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) {
        return NextResponse.json(
            { error: 'Trop de messages envoyés. Veuillez réessayer plus tard.' },
            { status: 429 }
        );
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    // Champ piège anti-spam : invisible pour les humains, rempli par les robots.
    if (typeof body.website === 'string' && body.website.length > 0) {
        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    }

    const name = clean(body.name, LIMITS.name);
    const email = clean(body.email, LIMITS.email);
    const phone = clean(body.phone, LIMITS.phone);
    const company = clean(body.company, LIMITS.company);
    const subject = clean(body.subject, LIMITS.subject) || 'Contact site web';
    const message = clean(body.message, LIMITS.message, false);

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
    }

    const { EMAIL_USER, EMAIL_PASS, CONTACT_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS) {
        console.error('Contact form: EMAIL_USER / EMAIL_PASS non configurés');
        return NextResponse.json({ error: "Service d'envoi indisponible" }, { status: 500 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: EMAIL_USER, pass: EMAIL_PASS },
        });

        const safeEmail = escapeHtml(email);

        await transporter.sendMail({
            from: `"Site Nas-Trans" <${EMAIL_USER}>`,
            to: CONTACT_TO || EMAIL_USER,
            replyTo: email,
            subject: `Nouveau message de ${name} : ${subject}`,
            text: [
                `Nom : ${name}`,
                `Email : ${email}`,
                ...(phone ? [`Téléphone : ${phone}`] : []),
                ...(company ? [`Société : ${company}`] : []),
                `Sujet : ${subject}`,
                '',
                'Message :',
                message,
            ].join('\n'),
            html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Nouveau message - Nas-Trans</title></head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 20px;">
    <tr><td align="center">
      <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
        <tr><td style="background-color: #0056b3; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">
            <span style="font-weight: 800;">NAS</span><span style="font-weight: 300;">TRANS</span>
          </h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">Notification de contact site web</p>
        </td></tr>
        <tr><td style="padding: 40px;">
          <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Vous avez reçu un nouveau message via le formulaire de contact :</p>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            ${field('Nom', name)}
            ${field('Email', email, `<a href="mailto:${safeEmail}" style="color: #0056b3; text-decoration: none;">${safeEmail}</a>`)}
            ${field('Téléphone', phone)}
            ${field('Société', company)}
            ${field('Sujet', subject)}
            <tr><td style="padding-top: 10px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 15px 0 0 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">Message</p>
              <div style="margin-top: 10px; background-color: #f1f5f9; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6;">
                ${escapeHtml(message).replace(/\r?\n/g, '<br>')}
              </div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} Nas-Trans Tunisie – notification automatique du site</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });

        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }
}
