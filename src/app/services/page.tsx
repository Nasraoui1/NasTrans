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
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900"
                    >
                        Nos Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Solutions logistiques complètes adaptées aux besoins de votre entreprise.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:border-brand-primary/50 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
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
                    ))}
                </div>

                {/* Process Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-heading text-slate-900">Comment ça marche</h2>
                        <div className="space-y-6">
                            {[
                                { icon: CubeIcon, title: "1. Demandez un Devis", desc: "Partagez les détails de votre expédition et vos besoins." },
                                { icon: ClockIcon, title: "2. Solution Sur Mesure", desc: "Nous planifions l'itinéraire et le mode de transport les plus efficaces." },
                                { icon: TruckIcon, title: "3. Livraison Rapide", desc: "Suivi en temps réel jusqu'à l'arrivée en toute sécurité." }
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                                        <p className="text-gray-600 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/contact">
                            <Button>Commencer Maintenant</Button>
                        </Link>
                    </div>

                    <div className="relative h-[400px] bg-white rounded-2xl overflow-hidden border border-slate-200 hidden md:block shadow-lg">
                        {/* Decorative Abstract Map or Dashboard Mock */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <GlobeAmericasIcon className="w-64 h-64 text-brand-primary/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
