import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactBand from "@/components/sections/ContactBand";
import { services, site, yearsOfExperience } from "@/lib/site";

export const metadata: Metadata = {
    title: "À propos de Nas-Trans Tunisie",
    description: `${site.name}, commissionnaire en douane et transitaire à Tunis depuis ${site.foundingYear} : notre histoire, nos engagements et notre fiche d’entreprise.`,
    alternates: { canonical: "/about" },
};

const commitments = [
    {
        title: "Efficacité et fiabilité",
        desc: "Une maîtrise des procédures douanières pour sécuriser vos marchandises de l’import à l’export, sans surprise ni retard.",
    },
    {
        title: "Rapidité de traitement",
        desc: "Des processus rodés et une équipe réactive pour réduire vos délais de dédouanement.",
    },
    {
        title: "Prise en charge complète",
        desc: "Régimes suspensifs, admission temporaire et formalités administratives complexes : nous gérons le dossier en entier.",
    },
];

export default function AboutPage() {
    const facts = [
        { k: "Raison sociale", v: site.name },
        { k: "Forme juridique", v: "Société à responsabilité limitée (SARL)" },
        { k: "Activité", v: `${site.activity}, commerce extérieur` },
        { k: "Création", v: String(site.foundingYear) },
        { k: "Siège", v: `${site.address.street}, ${site.address.postalCode} ${site.address.city}` },
        { k: "Zone d’intervention", v: "Tout le territoire tunisien" },
        { k: "Téléphone", v: site.phone.label },
        { k: "Email", v: site.emails[0] },
    ];

    return (
        <>
            <PageHeader crumbs={[{ name: "À propos", href: "/about" }]} title={`Au service des importateurs depuis ${site.foundingYear}`}>
                {site.name} est un commissionnaire en douane et transitaire installé au centre de Tunis.
            </PageHeader>

            <div className="wrap grid gap-16 py-16 md:py-24 lg:grid-cols-[1.3fr_1fr]">
                <section className="space-y-5 text-lg leading-relaxed max-w-[62ch]">
                    <h2 className="display text-[1.9rem] md:text-[2.3rem] mb-2">Notre métier</h2>
                    <p>
                        Depuis {yearsOfExperience} ans, Nas-Trans accomplit pour le compte des entreprises les formalités douanières
                        et de commerce extérieur liées à leurs importations et exportations. Constituée sous la loi n° 93-120, la
                        société a bâti sa réputation sur une connaissance approfondie des procédures et de la réglementation tunisiennes.
                    </p>
                    <p>
                        Plus qu’un simple transitaire, nous agissons comme le prolongement de votre entreprise : nous anticipons
                        les exigences réglementaires pour que vos marchandises passent la douane sans blocage, puis nous les
                        acheminons jusqu’à vos locaux.
                    </p>
                    <p>
                        Nos services couvrent {services.map((s) => s.title.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " et $1")}.
                    </p>
                </section>

                <section aria-labelledby="fiche">
                    <h2 id="fiche" className="display text-[1.9rem] md:text-[2.3rem] mb-6">Fiche de l’entreprise</h2>
                    <dl className="bg-white border border-rule">
                        {facts.map((f) => (
                            <div key={f.k} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-rule last:border-b-0 px-5 py-3.5">
                                <dt className="text-sm text-muted pt-0.5">{f.k}</dt>
                                <dd className="font-medium break-words">{f.v}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>

            <section className="bg-white border-y border-rule" aria-labelledby="engagements">
                <div className="wrap py-16 md:py-24">
                    <h2 id="engagements" className="display text-[2.3rem] md:text-[3.2rem] mb-12">Nos engagements</h2>
                    <div className="grid gap-px bg-rule border border-rule md:grid-cols-3">
                        {commitments.map((c) => (
                            <div key={c.title} className="bg-white p-7">
                                <h3 className="text-xl font-semibold">{c.title}</h3>
                                <p className="mt-3 text-muted leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactBand title="Travaillons ensemble" />
        </>
    );
}
