"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(false);
        setSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                reset();
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setError(true);
            }
        } catch (e) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-slate-900">Contactez-nous</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Besoin d'un devis ou d'un conseil en douane ? Notre équipe est à votre disposition pour vous accompagner dans toutes vos démarches logistiques et administratives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            {[
                                {
                                    icon: PhoneIcon,
                                    title: "Téléphone & GSM",
                                    content: "(+216) 71 256 462",
                                    sub: "GSM: (+216) 21 321 321"
                                },
                                {
                                    icon: DocumentTextIcon,
                                    title: "Fax",
                                    content: "(+216) 71 256 462",
                                    sub: "Service Administratif"
                                },
                                {
                                    icon: EnvelopeIcon,
                                    title: "Nous Écrire",
                                    content: "nastrans2021@gmail.com",
                                    sub: "nastrans@hotmail.fr"
                                },
                                {
                                    icon: MapPinIcon,
                                    title: "Adresse",
                                    content: "26 Rue Khereddine Barbarousse",
                                    sub: "RDC, Tunis 1000, Tunisie"
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <Card className="flex items-start gap-4 p-6 hover:shadow-md transition-all border-none bg-white">
                                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-brand-primary font-medium mb-1">{item.content}</p>
                                            <p className="text-gray-500 text-sm">{item.sub}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder - Tunis */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="h-[300px] w-full rounded-2xl overflow-hidden relative shadow-lg border border-slate-200"
                        >
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=26%20Rue%20Khereddine%20Barbarousse%20Tunis+(Nas-Trans)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="p-8 border-slate-200 h-fit bg-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Envoyer un message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Nom</label>
                                        <input
                                            {...register("name", { required: true })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                                            placeholder="Votre nom"
                                        />
                                        {errors.name && <span className="text-red-500 text-xs">Le nom est requis</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Email</label>
                                        <input
                                            {...register("email", { required: true })}
                                            type="email"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                                            placeholder="votre@email.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs">L'email est requis</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Sujet</label>
                                    <select
                                        {...register("subject")}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors cursor-pointer"
                                    >
                                        <option value="Demande de devis">Demander un devis</option>
                                        <option value="Information Générale">Information Générale</option>
                                        <option value="Support">Support</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Message</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        rows={5}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    />
                                    {errors.message && <span className="text-red-500 text-xs">Le message est requis</span>}
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full shadow-md">
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                                </Button>

                                {success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm text-center"
                                    >
                                        Message envoyé avec succès ! Nous vous répondrons bientôt.
                                    </motion.div>
                                )}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm text-center"
                                    >
                                        Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                                    </motion.div>
                                )}
                            </form>
                        </Card>
                    </motion.div>                </div>
            </div>
        </div>
    );
}
