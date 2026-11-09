import { allFaqs, services, site } from "@/lib/site";

// /llms.txt : résumé structuré du site pour les assistants IA (format llmstxt.org).
// Généré à partir des mêmes données que les pages, donc toujours à jour.
export const dynamic = "force-static";

export function GET() {
  const a = site.address;
  const body = `# ${site.name}

> ${site.description}

## Fiche
- Activité : ${site.activity}, commerce extérieur
- Forme juridique : ${site.legalForm}
- Fondée en : ${site.foundingYear}
- Adresse : ${a.street}, ${a.postalCode} ${a.city}, ${a.countryName}
- Téléphone : ${site.phone.label} ; GSM : ${site.mobile.label} ; Fax : ${site.fax}
- Email : ${site.emails.join(", ")}
- Zone d'intervention : tout le territoire tunisien
- Site : ${site.url}

## Services
${services.map((s) => `- [${s.title}](${site.url}/services/${s.id}) : ${s.intro} (${s.features.join(", ")})`).join("\n")}

## Pages
- [Accueil](${site.url}/)
- [Services](${site.url}/services)
- [Questions fréquentes](${site.url}/faq)
- [À propos](${site.url}/about)
- [Contact et devis](${site.url}/contact)

## Questions fréquentes
${allFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
