"use client";

import { ButtonLink } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { ArrowRightIcon, GlobeAmericasIcon, TruckIcon, ShieldCheckIcon, DocumentTextIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { services, site, yearsOfExperience } from "@/lib/site";

const featureStyles = [
    { icon: ShieldCheckIcon, color: "text-brand-primary", bgColor: "bg-blue-50" },
    { icon: GlobeAmericasIcon, color: "text-brand-secondary", bgColor: "bg-slate-100" },
    { icon: TruckIcon, color: "text-brand-accent", bgColor: "bg-amber-50" },
    { icon: DocumentTextIcon, color: "text-green-600", bgColor: "bg-green-50" },
];

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20 overflow-hidden bg-slate-50">
            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center pt-24">
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] opacity-60" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] opacity-40" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-brand-primary text-sm font-bold tracking-wider uppercase">
                            Douane & Transit · Tunis
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-slate-900">
                            Nas-Trans <br />
                            <span className="text-brand-primary">Tunisie SARL</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                            Votre partenaire de confiance pour toutes les formalités douanières et de commerce extérieur.
                            Efficacité, fiabilité et rapidité sur tout le territoire tunisien.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <ButtonLink href="/services" size="lg" className="group shadow-lg shadow-blue-500/20">
                                Nos Services
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </ButtonLink>
                            <ButtonLink href="/contact" variant="outline" size="lg">
                                Demander un Devis
                            </ButtonLink>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center gap-8 text-sm text-gray-500 font-medium">
                            <a href={site.phone.href} className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                                <PhoneIcon className="w-5 h-5 text-brand-primary" />
                                <span>{site.phone.label}</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <span className="text-brand-primary text-xl font-bold">{yearsOfExperience}+</span>
                                <span>ans d’expérience</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[360px] md:h-[500px] flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <div className="relative w-full h-full max-w-md mx-auto">
                            <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-8 border border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                            <div className="absolute inset-[20%] bg-white rounded-full shadow-2xl flex items-center justify-center">
                                <GlobeAmericasIcon className="w-32 h-32 md:w-48 md:h-48 text-brand-primary relative z-10" />
                            </div>

                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
                            >
                                <div className="bg-blue-50 p-2 rounded-lg">
                                    <TruckIcon className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium">Statut</div>
                                    <div className="text-sm font-bold text-slate-900">Dédouané</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
                            >
                                <div className="bg-indigo-50 p-2 rounded-lg">
                                    <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium">Depuis</div>
                                    <div className="text-sm font-bold text-slate-900">{site.foundingYear}</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pourquoi nous */}
            <section className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">Pourquoi choisir Nas-Trans ?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une expertise reconnue depuis {site.foundingYear} dans le dédouanement et le transit international.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => {
                        const style = featureStyles[index % featureStyles.length];
                        return (
                            <motion.div key={service.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                                <Link href={`/services#${service.id}`} className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                                    <Card className="group h-full">
                                        <div className={`w-14 h-14 rounded-xl ${style.bgColor} flex items-center justify-center mb-6`}>
                                            <style.icon className={`w-8 h-8 ${style.color}`} aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{service.short}</p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                                            En savoir plus <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden text-white p-8 md:p-12 text-center shadow-2xl bg-gradient-to-br from-brand-primary to-blue-700"
                >
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">Besoin d’un devis ?</h2>
                        <p className="text-blue-100 max-w-xl mx-auto text-lg">
                            Contactez-nous pour une estimation rapide ou pour discuter de vos besoins en dédouanement et logistique.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <ButtonLink href="/contact" size="lg" variant="white">Contactez-nous</ButtonLink>
                            <a href={site.phone.href} className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 text-lg font-bold border-2 border-white text-white hover:bg-white/10 transition-colors">
                                <PhoneIcon className="w-5 h-5" /> Appeler
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
