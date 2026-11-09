import { cn } from "@/lib/utils";

/** Monogramme « tampon » + nom. `light` pour les fonds sombres. */
export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-2.5", className)}>
            <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
                <rect x="2" y="2" width="36" height="36" rx="3" fill="none" stroke="#c23b2e" strokeWidth="2.5" />
                <rect x="6" y="6" width="28" height="28" rx="1.5" fill="none" stroke="#c23b2e" strokeWidth="1" />
                <text x="20" y="26.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15" fill="#c23b2e" letterSpacing="-0.5">NT</text>
            </svg>
            <span className="leading-none">
                <span className={cn("display block text-[1.35rem]", light ? "text-white" : "text-ink")}>Nas-Trans</span>
                <span className={cn("block text-[0.72rem] tracking-wide mt-0.5", light ? "text-white/60" : "text-muted")}>Tunisie SARL</span>
            </span>
        </span>
    );
}
