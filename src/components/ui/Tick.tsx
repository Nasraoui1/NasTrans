import { cn } from "@/lib/utils";

/** Case cochée, comme sur un formulaire papier. */
export default function Tick({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true" className={cn("w-4 h-4 shrink-0 translate-y-[3px] text-marine", className)}>
            <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 8.2 6.8 11 12 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
