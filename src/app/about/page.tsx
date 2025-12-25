"use client";

import { motion } from "framer-motion";
import { DocumentTextIcon, TruckIcon, ShieldCheckIcon, CubeTransparentIcon, UserGroupIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="container mx-auto px-4 md:px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900"
                    >
                        Une Expertise Reconnue en <span className="text-brand-primary">Douane & Transit</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed space-y-6 text-justify md:text-center"
                    >
                        <p>
                            <strong>Nas-Trans Tunisie SARL</strong> est une société de services constituée suivant la loi N° 93 120 du 27/12/1996, marquant le début de son activité en 1999. Forts de plus de deux décennies d'expérience, nous nous sommes imposés comme un partenaire stratégique pour les entreprises opérant en Tunisie.
                        </p>
                        <p>
                            Nous assurons avec rigueur et professionnalisme toutes les opérations et formalités de commerce extérieur, ainsi que l'intégralité des procédures douanières sur tout le territoire tunisien. Notre mission est de simplifier vos flux logistiques et de garantir la conformité totale de vos échanges internationaux.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Legal Info / Stats Replacement */}
            <section className="border-y border-slate-200 bg-white mb-20">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-4">
                            <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">772719M</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Code Douane (C.D.)</div>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">633802 X/A/M/000</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Matricule Fiscale (M.F.)</div>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">D 24781999</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Registre de Commerce (R.C.)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Competences */}
            <section className="container mx-auto px-4 md:px-6 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-heading text-slate-900">Nos Compétences et Notre Engagement</h2>
                        <p className="text-gray-600 text-lg">
                            Au-delà de la simple prestation de service, Nas-Trans se positionne comme votre conseiller privilégié. Notre maîtrise des réglementations douanières et notre réseau étendu nous permettent d'offrir :
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: ShieldCheckIcon,
                                    title: "Efficacité et Fiabilité",
                                    desc: "Nos compétences approfondies dans le domaine douanier vous garantissent une fiabilité absolue. Nous sécurisons vos opérations de dédouanement de l'arrivée de vos marchandises jusqu'à leur livraison dans vos locaux."
                                },
                                {
                                    icon: TruckIcon,
                                    title: "Rapidité de Traitement",
                                    desc: "Grâce à des moyens techniques modernes et des ressources humaines qualifiées, nous assurons une rapidité optimale dans le traitement de vos déclarations. Nous minimisons les délais d'attente et optimisons vos coûts logistiques."
                                },
                                {
                                    icon: DocumentTextIcon,
                                    title: "Gestion Complète des Formalités",
                                    desc: "Nous prenons en charge la totalité des procédures administratives et douanières. Commerce extérieur, régimes suspensifs, admission temporaire... nous maîtrisons tous les aspects pour vous offrir une tranquillité d'esprit totale."
                                }
                            ].map((val, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                        <val.icon className="w-6 h-6 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-slate-900">{val.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[600px] bg-blue-50 rounded-2xl overflow-hidden border border-slate-100 hidden md:block">
                        {/* Decorative Image/Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100 opacity-50" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-200 blur-[80px] rounded-full animate-pulse-slow opacity-30" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                            <div className="grid grid-cols-2 gap-4 opacity-10">
                                <UserGroupIcon className="w-24 h-24 text-brand-primary" />
                                <LightBulbIcon className="w-24 h-24 text-brand-primary" />
                                <ShieldCheckIcon className="w-24 h-24 text-brand-primary" />
                                <CubeTransparentIcon className="w-24 h-24 text-brand-primary" />
                            </div>
                            <div className="text-center z-10">
                                <h3 className="text-4xl font-bold text-brand-primary mb-2">25+</h3>
                                <p className="text-slate-500 font-medium">Années d'Expérience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
