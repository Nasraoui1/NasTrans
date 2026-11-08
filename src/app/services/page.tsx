"use client";

import { ButtonLink } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { TruckIcon, GlobeAmericasIcon, BuildingOffice2Icon, DocumentTextIcon, PhoneIcon, CheckIcon } from "@heroicons/react/24/outline";
import { services, site } from "@/lib/site";

const serviceStyles = [
    { icon: DocumentTextIcon, color: "text-brand-primary", bg: "bg-blue-50" },
    { icon: GlobeAmericasIcon, color: "text-brand-secondary", bg: "bg-slate-100" },
    { icon: TruckIcon, color: "text-brand-accent", bg: "bg-amber-50" },
    { icon: BuildingOffice2Icon, color: "text-green-600", bg: "bg-green-50" },
];

const steps = [
    { title: "Demandez un devis", desc: "Transmettez-nous la nature de la marchandise, son origine ou sa destination et vos documents disponibles." },
    { title: "Étude & préparation", desc: "Nous déterminons le régime douanier adapté et préparons l’ensemble des documents et déclarations." },
    { title: "Dédouanement & livraison", desc: "Nous suivons votre dossier jusqu’à la mainlevée et organisons l’acheminement jusqu’à vos locaux." },
];

export default function ServicesPage() {
    return (
        <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
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
                        Des solutions complètes de douane, de commerce extérieur et de logistique, adaptées aux besoins de votre entreprise.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    className="grid md:grid-cols-2 gap-8 mb-24"
                >
                    {services.map((service, index) => {
                        const style = serviceStyles[index % serviceStyles.length];
                        return (
                            <motion.article
                                key={service.id}
                                id={service.id}
                                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                            >
                                <Card className="group h-full">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className={`w-16 h-16 rounded-2xl ${style.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <style.icon className={`w-8 h-8 ${style.color}`} aria-hidden="true" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                                            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <CheckIcon className={`w-4 h-4 shrink-0 ${style.color}`} aria-hidden="true" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Process */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold font-heading text-slate-900">Comment ça marche</h2>
                        <ol className="space-y-8">
                            {steps.map((step, i) => (
                                <motion.li
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0 text-xl" aria-hidden="true">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ol>
                        <div className="pt-4">
                            <ButtonLink href="/contact" size="lg" className="shadow-lg shadow-brand-primary/20">Commencer maintenant</ButtonLink>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white shadow-xl p-10 md:p-12"
                    >
                        <GlobeAmericasIcon className="absolute -right-10 -bottom-10 w-72 h-72 text-white/5" aria-hidden="true" />
                        <div className="relative space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading">Une question sur votre dossier ?</h2>
                            <p className="text-blue-100 leading-relaxed">
                                Notre équipe vous répond directement par téléphone pour étudier votre opération d’import ou d’export.
                            </p>
                            <a href={site.phone.href} className="inline-flex items-center gap-3 text-2xl font-bold hover:text-blue-300 transition-colors">
                                <PhoneIcon className="w-7 h-7" /> {site.phone.label}
                            </a>
                            <p className="text-sm text-blue-200">GSM : <a href={site.mobile.href} className="hover:underline">{site.mobile.label}</a></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
