import type { Faq } from "@/lib/site";

/** Questions/réponses en <details> : lisibles sans JavaScript et par les robots. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
    return (
        <div className="border-t border-rule">
            {faqs.map((f) => (
                <details key={f.q} className="group border-b border-rule">
                    <summary className="flex items-start justify-between gap-6 py-5 text-lg font-semibold text-ink hover:text-marine">
                        <h3>{f.q}</h3>
                        <span className="faq-icon mt-1 text-2xl leading-none text-marine transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <p className="pb-6 -mt-1 max-w-[65ch] text-muted leading-relaxed">{f.a}</p>
                </details>
            ))}
        </div>
    );
}
