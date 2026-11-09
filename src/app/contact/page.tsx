import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact et demande de devis",
    description: `Contactez Nas-Trans à Tunis pour un devis de dédouanement ou un conseil en commerce extérieur. Tél. ${site.phone.label}, ${site.address.street}, ${site.address.city}.`,
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    const rows = [
        {
            k: "Téléphone",
            v: <a href={site.phone.href} className="hover:text-marine">{site.phone.label}</a>,
        },
        {
            k: "GSM",
            v: <a href={site.mobile.href} className="hover:text-marine">{site.mobile.label}</a>,
        },
        { k: "Fax", v: site.fax },
        {
            k: "Email",
            v: (
                <>
                    {site.emails.map((e) => (
                        <a key={e} href={`mailto:${e}`} className="block hover:text-marine break-all">{e}</a>
                    ))}
                </>
            ),
        },
        {
            k: "Adresse",
            v: (
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-marine">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}, {site.address.countryName}
                </a>
            ),
        },
    ];

    return (
        <>
            <PageHeader crumbs={[{ name: "Contact", href: "/contact" }]} title="Contact et demande de devis">
                Décrivez votre opération : nous revenons vers vous avec un devis ou une réponse à votre question.
            </PageHeader>

            <div className="wrap grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.25fr]">
                <div className="space-y-10">
                    <address className="not-italic">
                        <h2 className="display text-[1.9rem] md:text-[2.3rem] mb-6">Nous joindre</h2>
                        <dl className="border-t border-rule">
                            {rows.map((r) => (
                                <div key={r.k} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-rule py-4">
                                    <dt className="text-sm text-muted pt-0.5">{r.k}</dt>
                                    <dd className="font-medium">{r.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </address>

                    <div className="aspect-[4/3] w-full border border-rule bg-white">
                        <iframe
                            title={`Plan d’accès : ${site.address.street}, ${site.address.city}`}
                            src="https://maps.google.com/maps?hl=fr&q=26%20Rue%20Khereddine%20Barbarousse%20Tunis&z=15&output=embed"
                            className="h-full w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <section aria-labelledby="formulaire" className="bg-white border border-rule p-6 md:p-10 self-start">
                    <h2 id="formulaire" className="display text-[1.9rem] md:text-[2.3rem]">Envoyer une demande</h2>
                    <p className="mt-2 mb-8 text-muted">Les champs marqués d’un astérisque sont obligatoires.</p>
                    <ContactForm />
                </section>
            </div>
        </>
    );
}
