import Link from "next/link";
import Tick from "@/components/ui/Tick";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ButtonLink } from "@/components/ui/Button";
import DeclarationSheet from "@/components/sections/DeclarationSheet";
import FaqList from "@/components/sections/FaqList";
import ContactBand from "@/components/sections/ContactBand";
import JsonLd from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import { services, site, steps, documents, generalFaqs, yearsOfExperience } from "@/lib/site";

const homeFaqs = generalFaqs.slice(0, 4);

export default function Home() {
    return (
        <>
            <JsonLd data={faqSchema(homeFaqs)} />

            {/* Hero */}
            <section className="border-b border-rule">
                <div className="wrap grid gap-14 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center">
                    <div>
                        <h1 className="display text-ink text-[2.55rem] sm:text-[3.6rem] lg:text-[4.6rem] max-w-[13ch]">
                            Commissionnaire en douane à Tunis depuis {site.foundingYear}
                        </h1>
                        <p className="mt-7 max-w-[52ch] text-lg md:text-xl text-muted leading-relaxed">
                            Nas-Trans prend en charge vos formalités douanières, vos opérations de commerce extérieur et
                            l’acheminement de vos marchandises jusqu’à vos locaux, partout en Tunisie.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <ButtonLink href="/contact" size="lg">Demander un devis</ButtonLink>
                            <a href={site.phone.href} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-marine">
                                <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                                {site.phone.label}
                            </a>
                        </div>
                    </div>
                    <div className="max-w-xl w-full lg:justify-self-end">
                        <DeclarationSheet />
                    </div>
                </div>

                {/* Faits clés, présentés comme des cases de formulaire */}
                <div className="wrap">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule border-t border-rule">
                        {[
                            { k: "Expérience", v: `${yearsOfExperience} ans, depuis ${site.foundingYear}` },
                            { k: "Bureaux", v: `${site.address.city}, centre-ville` },
                            { k: "Zone d’intervention", v: "Toute la Tunisie" },
                            { k: "Opérations", v: "Import, export, régimes suspensifs" },
                        ].map((f) => (
                            <div key={f.k} className="bg-paper py-5 pr-4 [&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-5">
                                <dt className="text-sm text-muted">{f.k}</dt>
                                <dd className="mt-1 font-semibold text-ink">{f.v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Services */}
            <section className="wrap py-20 md:py-28" aria-labelledby="services-titre">
                <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end mb-12">
                    <h2 id="services-titre" className="display text-[2.3rem] md:text-[3.2rem] max-w-[14ch]">
                        Ce que nous prenons en charge
                    </h2>
                    <p className="text-muted max-w-[52ch] md:justify-self-end">
                        De la déclaration en douane à la livraison, un seul interlocuteur suit votre dossier.
                    </p>
                </div>
                <ul className="border-t-2 border-ink">
                    {services.map((s) => (
                        <li key={s.id} className="border-b border-rule">
                            <Link
                                href={`/services/${s.id}`}
                                className="group grid gap-3 py-7 md:grid-cols-[1fr_1.5fr_auto] md:gap-10 md:items-baseline"
                            >
                                <h3 className="display text-[1.6rem] md:text-[1.9rem] text-ink group-hover:text-marine transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-muted leading-relaxed max-w-[55ch]">{s.short}</p>
                                <span className="text-sm font-semibold text-marine underline-offset-4 group-hover:underline whitespace-nowrap">
                                    Voir le détail
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Déroulement : vraie séquence, donc numérotée */}
            <section className="bg-white border-y border-rule" aria-labelledby="etapes-titre">
                <div className="wrap py-20 md:py-28">
                    <h2 id="etapes-titre" className="display text-[2.3rem] md:text-[3.2rem] max-w-[18ch] mb-14">
                        Comment se déroule un dédouanement avec nous
                    </h2>
                    <ol className="grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, i) => (
                            <li key={step.title} className="bg-white p-6 md:p-7">
                                <span className="display block text-[2.6rem] text-stamp leading-none" aria-hidden="true">{i + 1}</span>
                                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                                <p className="mt-2 text-muted leading-relaxed">{step.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Documents */}
            <section className="wrap py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.3fr]" aria-labelledby="documents-titre">
                <div>
                    <h2 id="documents-titre" className="display text-[2.3rem] md:text-[3.2rem] max-w-[14ch]">
                        Les documents à préparer
                    </h2>
                    <p className="mt-5 text-muted max-w-[44ch] leading-relaxed">
                        La liste exacte dépend de la marchandise et du régime. Envoyez-nous ce que vous avez : nous vous dirons ce qui manque.
                    </p>
                </div>
                <ul className="border-t border-rule">
                    {documents.map((d) => (
                        <li key={d.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4">
                            <span className="flex items-baseline gap-3 font-medium text-ink">
                                <Tick />
                                {d.name}
                            </span>
                            {d.note && <span className="text-sm text-muted">{d.note}</span>}
                        </li>
                    ))}
                </ul>
            </section>

            {/* FAQ */}
            <section className="wrap pb-20 md:pb-28 grid gap-12 lg:grid-cols-[1fr_1.3fr]" aria-labelledby="faq-titre">
                <div>
                    <h2 id="faq-titre" className="display text-[2.3rem] md:text-[3.2rem] max-w-[12ch]">
                        Questions fréquentes
                    </h2>
                    <Link href="/faq" className="mt-5 inline-block font-semibold text-marine underline underline-offset-4">
                        Toutes les questions
                    </Link>
                </div>
                <FaqList faqs={homeFaqs} />
            </section>

            <ContactBand />
        </>
    );
}
