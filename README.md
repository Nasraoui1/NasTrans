# Nas-Trans Tunisie – site vitrine

Site de Nas-Trans Tunisie SARL (commissionnaire en douane et transitaire, Tunis). Next.js 16, React 19, Tailwind CSS 4, Framer Motion.

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev
```

Ouvrir http://localhost:3000.

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `EMAIL_USER` | Compte Gmail expéditeur du formulaire de contact |
| `EMAIL_PASS` | Mot de passe d'application Gmail |
| `CONTACT_TO` | (optionnel) destinataire des messages, sinon `EMAIL_USER` |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (sitemap, canonique, Open Graph) |

## Structure

- `src/lib/site.ts` : coordonnées de l'entreprise et liste des services (source unique, utilisée par toutes les pages, le pied de page et les données SEO).
- `src/app/*` : pages (accueil, services, à propos, contact), `sitemap.ts`, `robots.ts`, page 404.
- `src/app/api/contact/route.ts` : envoi des emails du formulaire (validation, anti-spam, limitation de débit).

## Scripts

- `npm run dev` – serveur de développement
- `npm run build` – build de production
- `npm run lint` – ESLint
