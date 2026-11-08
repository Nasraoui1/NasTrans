import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "outlineWhite";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm border border-transparent",
    secondary: "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-sm border border-transparent",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5",
    ghost: "bg-transparent text-gray-600 hover:text-brand-primary hover:bg-gray-100",
    white: "bg-white text-brand-primary hover:bg-gray-100 border border-transparent shadow-md",
    outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg font-bold tracking-wide",
};

export function buttonClasses({
    variant = "primary",
    size = "md",
    className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
    return cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200",
        "hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
    );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    children: ReactNode;
}

export default function Button({ className, variant, size, children, ...props }: ButtonProps) {
    return (
        <button className={buttonClasses({ variant, size, className })} {...props}>
            {children}
        </button>
    );
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
    variant?: Variant;
    size?: Size;
}

/** Lien stylé comme un bouton (évite le HTML invalide <a><button>). */
export function ButtonLink({ className, variant, size, children, ...props }: ButtonLinkProps) {
    return (
        <Link className={buttonClasses({ variant, size, className })} {...props}>
            {children}
        </Link>
    );
}
