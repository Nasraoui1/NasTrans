"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PrinterIcon } from "@heroicons/react/24/solid";
import { useState, type ReactNode } from "react";
import { site } from "@/lib/site";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    website: string; // champ piège anti-spam
}

const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors aria-[invalid=true]:border-red-400";

const linkClass = "hover:underline underline-offset-2";

const contactItems: { icon: typeof PhoneIcon; title: string; content: ReactNode; sub: ReactNode }[] = [
    {
        icon: PhoneIcon,
        title: "Téléphone & GSM",
        content: <a href={site.phone.href} className={linkClass}>{site.phone.label}</a>,
        sub: <>GSM : <a href={site.mobile.href} className={linkClass}>{site.mobile.label}</a></>,
    },
    {
        icon: PrinterIcon,
        title: "Fax",
        content: site.fax,
        sub: "Service administratif",
    },
    {
        icon: EnvelopeIcon,
        title: "Nous écrire",
        content: <a href={`mailto:${site.emails[0]}`} className={linkClass}>{site.emails[0]}</a>,
        sub: <a href={`mailto:${site.emails[1]}`} className={linkClass}>{site.emails[1]}</a>,
    },
    {
        icon: MapPinIcon,
        title: "Adresse",
        content: <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>{site.address.street}</a>,
        sub: `${site.address.postalCode} ${site.address.city}, ${site.address.countryName}`,
    },
];

export default function ContactPage() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
        defaultValues: { subject: "Demande de devis" },
    });
    const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const onSubmit = async (data: FormData) => {
        setStatus(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus({ type: "success", text: "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais." });
                reset();
            } else {
                setStatus({ type: "error", text: json.error || "Une erreur est survenue lors de l’envoi. Veuillez réessayer." });
            }
        } catch {
            setStatus({ type: "error", text: "Impossible de joindre le serveur. Vérifiez votre connexion ou appelez-nous directement." });
        }
    };

    return (
        <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-slate-900">Contactez-nous</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Besoin d’un devis ou d’un conseil en douane ? Notre équipe est à votre disposition pour vous accompagner dans toutes vos démarches logistiques et administratives.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Coordonnées */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactItems.map((item) => (
                                <Card key={item.title} hoverEffect={false} className="flex items-start gap-4 p-6 border-none">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-brand-primary" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h2>
                                        <p className="text-brand-primary font-medium mb-1 break-words">{item.content}</p>
                                        <p className="text-gray-500 text-sm break-words">{item.sub}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="h-[300px] w-full rounded-2xl overflow-hidden relative shadow-lg border border-slate-200">
                            <iframe
                                title="Plan d’accès Nas-Trans – 26 Rue Khereddine Barbarousse, Tunis"
                                src="https://maps.google.com/maps?hl=fr&q=26%20Rue%20Khereddine%20Barbarousse%20Tunis&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card hoverEffect={false} className="p-8 border-slate-200 h-fit shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Envoyer un message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                {/* Piège anti-robots, invisible */}
                                <div className="hidden" aria-hidden="true">
                                    <label htmlFor="website">Site web</label>
                                    <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-600">Nom <span className="text-red-500">*</span></label>
                                        <input
                                            id="name"
                                            autoComplete="name"
                                            {...register("name", { required: "Le nom est requis", maxLength: { value: 100, message: "100 caractères maximum" } })}
                                            aria-invalid={!!errors.name}
                                            className={inputClass}
                                            placeholder="Votre nom"
                                        />
                                        {errors.name && <p role="alert" className="text-red-500 text-xs">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-600">Email <span className="text-red-500">*</span></label>
                                        <input
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            {...register("email", {
                                                required: "L’email est requis",
                                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Adresse email invalide" },
                                            })}
                                            aria-invalid={!!errors.email}
                                            className={inputClass}
                                            placeholder="votre@email.com"
                                        />
                                        {errors.email && <p role="alert" className="text-red-500 text-xs">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-600">Téléphone</label>
                                        <input id="phone" type="tel" autoComplete="tel" {...register("phone")} className={inputClass} placeholder="+216 …" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-600">Société</label>
                                        <input id="company" autoComplete="organization" {...register("company")} className={inputClass} placeholder="Nom de votre société" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-600">Sujet</label>
                                    <select id="subject" {...register("subject")} className={`${inputClass} cursor-pointer`}>
                                        <option value="Demande de devis">Demander un devis</option>
                                        <option value="Dédouanement">Dédouanement</option>
                                        <option value="Commerce extérieur">Commerce extérieur</option>
                                        <option value="Information générale">Information générale</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-600">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        id="message"
                                        {...register("message", {
                                            required: "Le message est requis",
                                            minLength: { value: 10, message: "Merci de détailler un peu votre demande (10 caractères min.)" },
                                            maxLength: { value: 5000, message: "5000 caractères maximum" },
                                        })}
                                        aria-invalid={!!errors.message}
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Nature de la marchandise, origine/destination, régime douanier souhaité…"
                                    />
                                    {errors.message && <p role="alert" className="text-red-500 text-xs">{errors.message.message}</p>}
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full shadow-md">
                                    {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
                                </Button>

                                <div aria-live="polite">
                                    {status && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded border text-sm text-center ${status.type === "success"
                                                ? "bg-green-50 border-green-200 text-green-700"
                                                : "bg-red-50 border-red-200 text-red-700"}`}
                                        >
                                            {status.text}
                                        </motion.div>
                                    )}
                                </div>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
