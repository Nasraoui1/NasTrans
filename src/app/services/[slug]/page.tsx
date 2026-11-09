import type { Metadata } from "next";
import Tick from "@/components/ui/Tick";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import FaqList from "@/components/sections/FaqList";
import ContactBand from "@/components/sections/ContactBand";
import JsonLd from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getService, services, site, steps } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = getService((await params).slug);
    if (!service) return {};
    return {
        title: `${service.title} en Tunisie`,
        description: `${service.intro} Nas-Trans, commissionnaire en douane à Tunis depuis ${site.foundingYear}.`,
        alternates: { canonical: `/services/${service.id}` },
        openGraph: { title: `${service.title} en Tunisie | Nas-Trans`, url: `/services/${service.id}` },
    };
}

export default async function ServicePage({ params }: Props) {
    const service = getService((await params).slug);
    if (!service) notFound();
    const others = services.filter((s) => s.id !== service.id);

    return (
        <>
            <JsonLd data={serviceSchema(service)} />
            {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}

            <PageHeader
                crumbs={[
                    { name: "Services", href: "/services" },
                    { name: service.title, href: `/services/${service.id}` },
                ]}
                title={service.title}
            >
                {service.intro}
            </PageHeader>

            <div className="wrap grid gap-14 py-16 md:py-24 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-16">
                    <section className="space-y-5 text-lg leading-relaxed max-w-[62ch]">
                        {service.body.map((p) => <p key={p}>{p}</p>)}
                    </section>

                    <section aria-labelledby="inclus">
                        <h2 id="inclus" className="display text-[1.9rem] md:text-[2.3rem] mb-6">Ce qui est inclus</h2>
                        <ul className="border-t border-rule">
                            {service.features.map((f) => (
                                <li key={f} className="flex gap-3 border-b border-rule py-4 font-medium">
                                    <Tick />{f}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section aria-labelledby="deroulement">
                        <h2 id="deroulement" className="display text-[1.9rem] md:text-[2.3rem] mb-6">Déroulement</h2>
                        <ol className="border-t border-rule">
                            {steps.map((s, i) => (
                                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-rule py-4">
                                    <span className="display text-2xl text-stamp" aria-hidden="true">{i + 1}</span>
                                    <span>
                                        <strong className="font-semibold">{s.title}.</strong>{" "}
                                        <span className="text-muted">{s.desc}</span>
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {service.faqs.length > 0 && (
                        <section aria-labelledby="questions">
                            <h2 id="questions" className="display text-[1.9rem] md:text-[2.3rem] mb-6">Questions fréquentes</h2>
                            <FaqList faqs={service.faqs} />
                        </section>
                    )}
                </div>

                <aside className="lg:sticky lg:top-28 self-start space-y-10">
                    <div className="bg-white border border-rule p-6 md:p-7">
                        <h2 className="text-lg font-semibold">Obtenir un devis</h2>
                        <p className="mt-2 text-muted leading-relaxed">
                            Décrivez votre opération : nature de la marchandise, origine ou destination, mode de transport.
                        </p>
                        <ButtonLink href="/contact" className="mt-5 w-full">Demander un devis</ButtonLink>
                        <p className="mt-4 text-sm text-muted">
                            Ou appelez le <a href={site.phone.href} className="font-semibold text-ink whitespace-nowrap">{site.phone.label}</a>
                        </p>
                    </div>
                    <nav aria-label="Autres services">
                        <h2 className="text-sm text-muted mb-3">Autres services</h2>
                        <ul className="border-t border-rule">
                            {others.map((o) => (
                                <li key={o.id} className="border-b border-rule">
                                    <Link href={`/services/${o.id}`} className="block py-3 font-medium hover:text-marine">{o.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>

            <ContactBand />
        </>
    );
}
