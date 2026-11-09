import { site } from "@/lib/site";
import Tick from "@/components/ui/Tick";

/**
 * Illustration du hero : une déclaration en douane stylisée (cases numérotées
 * comme sur un vrai formulaire) sur laquelle vient se poser le tampon.
 */
export default function DeclarationSheet() {
    const box = "border-rule p-3 md:p-4";
    const label = "block text-[0.7rem] text-muted mb-1";
    const value = "block text-[0.92rem] font-medium text-ink leading-snug";

    return (
        <div aria-hidden="true" className="relative select-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-rule/60 rounded-[2px]" />
            <div className="relative bg-white border border-rule rounded-[2px] shadow-[0_1px_0_rgba(19,36,58,0.06)]">
                <div className="flex items-baseline justify-between border-b-2 border-ink px-4 py-3">
                    <span className="display text-xl text-ink">Déclaration en douane</span>
                    <span className="text-xs text-muted">Exemplaire client</span>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div className={`${box} col-span-4 border-r border-b`}>
                        <span className={label}>1 · Déclarant</span>
                        <span className={value}>{site.name}</span>
                    </div>
                    <div className={`${box} col-span-2 border-b`}>
                        <span className={label}>2 · Bureau</span>
                        <span className={value}>Tunis</span>
                    </div>
                    <div className={`${box} col-span-3 border-r border-b`}>
                        <span className={label}>3 · Régime</span>
                        <span className={value}>Mise à la consommation</span>
                    </div>
                    <div className={`${box} col-span-3 border-b`}>
                        <span className={label}>4 · Sens</span>
                        <span className={value}>Importation</span>
                    </div>
                    <div className={`${box} col-span-6 border-b`}>
                        <span className={label}>5 · Documents joints</span>
                        <span className="flex flex-wrap gap-x-4 gap-y-1 text-[0.85rem] text-ink">
                            <span className="flex gap-1.5"><Tick className="w-3.5 h-3.5 translate-y-[3px]" />Facture</span><span className="flex gap-1.5"><Tick className="w-3.5 h-3.5 translate-y-[3px]" />Colisage</span><span className="flex gap-1.5"><Tick className="w-3.5 h-3.5 translate-y-[3px]" />Connaissement</span><span className="flex gap-1.5"><Tick className="w-3.5 h-3.5 translate-y-[3px]" />Certificat d’origine</span>
                        </span>
                    </div>
                    <div className={`${box} col-span-6 h-32 md:h-36 relative`}>
                        <span className={label}>6 · Visa du service</span>
                        <div className="stamp absolute right-5 bottom-4 md:right-8 border-[3px] border-stamp text-stamp rounded-[4px] px-4 py-2 text-center">
                            <div className="border border-stamp px-3 py-1">
                                <span className="display block text-[1.7rem] md:text-[2rem] tracking-wide">DÉDOUANÉ</span>
                                <span className="block text-[0.65rem] font-semibold tracking-[0.2em]">NAS-TRANS · TUNIS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
