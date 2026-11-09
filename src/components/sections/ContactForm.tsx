"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
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

const input =
    "w-full h-12 bg-paper border border-rule rounded-[3px] px-3.5 text-ink placeholder:text-muted/70 focus:outline-none focus:border-marine focus:ring-1 focus:ring-marine aria-[invalid=true]:border-stamp";
const labelCls = "block text-sm font-medium text-ink mb-1.5";
const errorCls = "mt-1.5 text-sm text-stamp";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ defaultValues: { subject: "Demande de devis" } });
    const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

    const onSubmit = async (data: FormData) => {
        setStatus(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok) {
                setStatus({ ok: true, text: "Demande envoyée. Nous vous répondons dans les meilleurs délais." });
                reset();
            } else {
                setStatus({ ok: false, text: json.error || `L’envoi a échoué. Réessayez ou appelez le ${site.phone.label}.` });
            }
        } catch {
            setStatus({ ok: false, text: `Le serveur ne répond pas. Vérifiez votre connexion ou appelez le ${site.phone.label}.` });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Site web</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelCls}>Nom *</label>
                    <input
                        id="name"
                        autoComplete="name"
                        className={input}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        {...register("name", { required: "Indiquez votre nom.", maxLength: { value: 100, message: "100 caractères maximum." } })}
                    />
                    {errors.name && <p id="name-error" className={errorCls}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="company" className={labelCls}>Société</label>
                    <input id="company" autoComplete="organization" className={input} {...register("company")} />
                </div>
                <div>
                    <label htmlFor="email" className={labelCls}>Email *</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={input}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email", {
                            required: "Indiquez votre email pour que nous puissions vous répondre.",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Cette adresse email n’est pas valide." },
                        })}
                    />
                    {errors.email && <p id="email-error" className={errorCls}>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="phone" className={labelCls}>Téléphone</label>
                    <input id="phone" type="tel" autoComplete="tel" className={input} {...register("phone")} />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className={labelCls}>Objet</label>
                <select id="subject" className={`${input} cursor-pointer`} {...register("subject")}>
                    <option value="Demande de devis">Demande de devis</option>
                    <option value="Dédouanement">Dédouanement</option>
                    <option value="Commerce extérieur">Commerce extérieur</option>
                    <option value="Information générale">Information générale</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className={labelCls}>Votre demande *</label>
                <textarea
                    id="message"
                    rows={6}
                    className={`${input} h-auto py-3 resize-y`}
                    placeholder="Nature de la marchandise, origine ou destination, mode de transport, adresse de livraison…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message", {
                        required: "Décrivez votre demande.",
                        minLength: { value: 10, message: "Ajoutez quelques détails (10 caractères minimum)." },
                        maxLength: { value: 5000, message: "5000 caractères maximum." },
                    })}
                />
                {errors.message && <p id="message-error" className={errorCls}>{errors.message.message}</p>}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Envoi en cours…" : "Envoyer la demande"}
            </Button>

            <div aria-live="polite">
                {status && (
                    <p
                        className={`border-l-4 px-4 py-3 ${status.ok ? "border-marine bg-marine/5 text-ink" : "border-stamp bg-stamp/5 text-stamp"}`}
                    >
                        {status.text}
                    </p>
                )}
            </div>
        </form>
    );
}
