"use client";

import { motion } from "framer-motion";
import { DocumentTextIcon, TruckIcon, ShieldCheckIcon, CubeTransparentIcon, UserGroupIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-brand-primary text-sm font-bold tracking-wider uppercase mb-4">
                            Depuis 1999
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 leading-tight">
                            L'Excellence en <span className="text-brand-primary">Douane & Transit</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-gray-600 leading-relaxed space-y-6 text-justify md:text-center max-w-3xl mx-auto"
                    >
                        <p>
                            <strong>Nas-Trans Tunisie SARL</strong> est votre partenaire stratégique en logistique depuis plus de 25 ans. Constituée sous la loi N° 93 120, nous avons bâti notre réputation sur une expertise sans faille et une connaissance approfondie des rouages du commerce international.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Key Stats / Trust Indicators */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white rounded-2xl p-12 shadow-sm border border-slate-100">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-brand-primary">25+</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Années d'Expérience</div>
                        </div>
                        <div className="space-y-2 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-12 md:after:w-px md:after:bg-slate-100 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-12 md:before:w-px md:before:bg-slate-100">
                            <div className="text-4xl font-bold text-slate-900">100%</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Conformité Douanière</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-brand-primary">24/7</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Support Réactif</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services & Competences - Staggered Grid */}
            <section className="container mx-auto px-4 md:px-6 mb-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Nos Compétences et Notre Engagement</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Plus qu'un simple transitaire, Nas-Trans agit comme un véritable prolongement de votre entreprise. Nous anticipons les défis réglementaires pour fluidifier vos échanges.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: ShieldCheckIcon,
                                    title: "Efficacité et Fiabilité",
                                    desc: "Une maîtrise totale des procédures douanières pour sécuriser vos marchandises de l'import à l'export, sans surprise ni retard."
                                },
                                {
                                    icon: TruckIcon,
                                    title: "Rapidité de Traitement",
                                    desc: "Des processus optimisés et une équipe réactive pour réduire vos délais de dédouanement et accélérer votre chaîne logistique."
                                },
                                {
                                    icon: DocumentTextIcon,
                                    title: "Gestion Complète",
                                    desc: "Prise en charge intégrale : régimes suspensifs, admission temporaire, et toutes formalités administratives complexes."
                                }
                            ].map((val, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                                    className="flex gap-5 p-6 rounded-2xl bg-white/50 border border-slate-100 shadow-sm transition-all cursor-default"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-600/5 flex items-center justify-center shrink-0">
                                        <val.icon className="w-7 h-7 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-slate-900">{val.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[700px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 shadow-2xl hidden md:block"
                    >
                        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div>

                        {/* Abstract Shapes */}
                        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[80px]"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white space-y-8">
                            <CubeTransparentIcon className="w-24 h-24 text-blue-400 opacity-80" />
                            <div>
                                <h3 className="text-3xl font-bold mb-2">Partenaire de Confiance</h3>
                                <p className="text-blue-200">Pour les leaders de l'industrie tunisienne</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 w-full max-w-xs mt-8 opacity-60">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="h-2 bg-white/10 rounded-full w-full"></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
