"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { TruckIcon, PaperAirplaneIcon, GlobeAmericasIcon, BuildingOffice2Icon, CubeIcon, ClockIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
    {
        icon: DocumentTextIcon,
        title: "Formalités Douanières",
        description: "Nous assurons toutes les procédures et opérations de formalités douanières sur tout le territoire tunisien.",
        features: ["Procédures Douanières", "Régimes Suspensifs", "Dédouanement Rapide", "Assistance Technique"],
        color: "text-brand-primary"
    },
    {
        icon: GlobeAmericasIcon,
        title: "Commerce Extérieur",
        description: "Prise en charge complète de toutes les opérations et formalités liées au commerce extérieur.",
        features: ["Conseil Export/Import", "Titres de Commerce", "Réglementation", "Dossiers Complexes"],
        color: "text-brand-secondary"
    },
    {
        icon: TruckIcon,
        title: "Dédouanement & Livraison",
        description: "Garantie d'efficacité et fiabilité pour le dédouanement de vos marchandises jusqu'à vos locaux.",
        features: ["Livraison Door-to-Door", "Enlèvement Marchandise", "Transport Sécurisé", "Logistique"],
        color: "text-brand-accent"
    },
    {
        icon: BuildingOffice2Icon,
        title: "Traitement des Déclarations",
        description: "Moyens et ressources assurant une rapidité optimale du traitement de vos déclarations douanières.",
        features: ["Saisie Rapide", "Suivi Dossier", "Optimisation Délais", "Conformité Totale"],
        color: "text-green-600"
    }
];

export default function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900"
                    >
                        Nos Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Solutions logistiques complètes adaptées aux besoins de votre entreprise.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 mb-20"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="group hover:border-brand-primary/50 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-8 h-8 ${service.color}`} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-slate-900 transition-colors">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className={`text-sm text-gray-600 ${service.color.replace('text-', 'marker:text-')}`}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Process Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold font-heading text-slate-900">Comment ça marche</h2>
                        <div className="space-y-8">
                            {[
                                { icon: CubeIcon, title: "1. Demandez un Devis", desc: "Partagez les détails de votre expédition et vos besoins." },
                                { icon: ClockIcon, title: "2. Solution Sur Mesure", desc: "Nous planifions l'itinéraire et le mode de transport les plus efficaces." },
                                { icon: TruckIcon, title: "3. Livraison Rapide", desc: "Suivi en temps réel jusqu'à l'arrivée en toute sécurité." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0 text-xl">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">{step.title}</h4>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Link href="/contact">
                                <Button size="lg" className="shadow-lg shadow-brand-primary/20">Commencer Maintenant</Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] bg-white rounded-2xl overflow-hidden border border-slate-200 hidden md:block shadow-xl"
                    >
                        {/* Decorative Abstract Map or Dashboard Mock */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <GlobeAmericasIcon className="w-64 h-64 text-brand-primary/10 animate-pulse-slow" />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium text-slate-600">Système opérationnel</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
