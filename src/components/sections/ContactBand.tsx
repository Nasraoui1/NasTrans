import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function ContactBand({ title = "Un dossier à dédouaner ?" }: { title?: string }) {
    return (
        <section className="bg-marine text-white">
            <div className="wrap grid gap-10 py-16 md:py-20 md:grid-cols-[1.2fr_1fr] md:items-end">
                <div>
                    <h2 className="display text-[2.3rem] md:text-[3.2rem] max-w-[14ch]">{title}</h2>
                    <p className="mt-5 max-w-[48ch] text-white/80 leading-relaxed">
                        Décrivez la marchandise, son origine ou sa destination et l’adresse de livraison : nous revenons vers vous avec un devis.
                    </p>
                </div>
                <div className="space-y-6">
                    <a href={site.phone.href} className="display block text-[2rem] md:text-[2.5rem] hover:underline underline-offset-8 decoration-2">
                        {site.phone.label}
                    </a>
                    <div className="flex flex-wrap gap-3">
                        <ButtonLink href="/contact" variant="light" size="lg">Demander un devis</ButtonLink>
                        <a href={`mailto:${site.emails[0]}`} className="inline-flex h-13 items-center px-2 font-semibold text-white/90 hover:text-white underline underline-offset-4">
                            Écrire un email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
