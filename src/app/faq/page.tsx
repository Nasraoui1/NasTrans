import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import FaqList from "@/components/sections/FaqList";
import ContactBand from "@/components/sections/ContactBand";
import JsonLd from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import { allFaqs, generalFaqs, services } from "@/lib/site";

export const metadata: Metadata = {
    title: "Questions fréquentes sur le dédouanement en Tunisie",
    description:
        "Commissionnaire en douane, documents à fournir, mainlevée, régimes suspensifs, délais : les réponses de Nas-Trans aux questions fréquentes sur le dédouanement en Tunisie.",
    alternates: { canonical: "/faq" },
};

export default function FaqPage() {
    return (
        <>
            <JsonLd data={faqSchema(allFaqs)} />
            <PageHeader crumbs={[{ name: "Questions fréquentes", href: "/faq" }]} title="Questions fréquentes">
                Les réponses aux questions que l’on nous pose le plus souvent sur le dédouanement et le commerce extérieur en Tunisie.
            </PageHeader>

            <div className="wrap py-16 md:py-24">
                <div className="max-w-4xl space-y-16">
                    <section aria-labelledby="general">
                        <h2 id="general" className="display text-[1.9rem] md:text-[2.3rem] mb-6">Généralités</h2>
                        <FaqList faqs={generalFaqs} />
                    </section>
                    {services.filter((s) => s.faqs.length > 0).map((s) => (
                        <section key={s.id} aria-labelledby={`faq-${s.id}`}>
                            <h2 id={`faq-${s.id}`} className="display text-[1.9rem] md:text-[2.3rem] mb-6">{s.title}</h2>
                            <FaqList faqs={s.faqs} />
                        </section>
                    ))}
                </div>
            </div>

            <ContactBand title="Votre question n’est pas dans la liste ?" />
        </>
    );
}
