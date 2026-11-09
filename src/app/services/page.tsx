import type { Metadata } from "next";
import Tick from "@/components/ui/Tick";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import ContactBand from "@/components/sections/ContactBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
    title: "Services de douane et de transit",
    description:
        "Formalités douanières, commerce extérieur, dédouanement et livraison, traitement des déclarations : les services de Nas-Trans, commissionnaire en douane à Tunis.",
    alternates: { canonical: "/services" },
};

export default function ServicesPage() {
    return (
        <>
            <PageHeader crumbs={[{ name: "Services", href: "/services" }]} title="Services de douane et de transit">
                Nous prenons en charge vos opérations de bout en bout : préparation du dossier, déclaration en douane, suivi des contrôles et livraison jusqu’à vos locaux.
            </PageHeader>

            <div className="wrap py-16 md:py-24">
                {services.map((s) => (
                    <article key={s.id} id={s.id} className="grid gap-8 border-b border-rule py-12 first:pt-0 lg:grid-cols-[1fr_1.4fr]">
                        <h2 className="display text-[2rem] md:text-[2.6rem] max-w-[14ch]">
                            <Link href={`/services/${s.id}`} className="hover:text-marine">{s.title}</Link>
                        </h2>
                        <div>
                            <p className="text-lg leading-relaxed max-w-[58ch]">{s.intro}</p>
                            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 border-t border-rule">
                                {s.features.map((f) => (
                                    <li key={f} className="flex gap-3 border-b border-rule py-3 text-muted">
                                        <Tick />{f}
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/services/${s.id}`} className="mt-6 inline-block font-semibold text-marine underline underline-offset-4">
                                En savoir plus : {s.title.toLowerCase()}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <ContactBand />
        </>
    );
}
