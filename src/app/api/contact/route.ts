import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Target email
            replyTo: email,
            subject: `Nouveau message de ${name}: ${subject || 'Contact Site Web'}`,
            text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouveau Message - Nas-Trans</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #0056b3; padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">
                                <span style="font-weight: 800;">NAS</span><span style="font-weight: 300;">TRANS</span>
                            </h1>
                            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">Notification de Contact Site Web</p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Vous avez reçu un nouveau message via le formulaire de contact :</p>
                            
                            <!-- Fields -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <p style="margin: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">Nom</p>
                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${name}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <p style="margin: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">Email</p>
                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                                            <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 25px; border-bottom: 1px solid #e2e8f0;">
                                        <p style="margin: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">Sujet</p>
                                        <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${subject}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 25px;">
                                        <p style="margin: 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600;">Message</p>
                                        <div style="margin-top: 10px; background-color: #f1f5f9; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6;">
                                            ${message.replace(/\n/g, '<br>')}
                                        </div>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                                © ${new Date().getFullYear()} Nas-Trans Tunisie Website Auto-Notification
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email envoyé avec succès' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: "Erreur lors de l'envoi de l'email" },
            { status: 500 }
        );
    }
}
