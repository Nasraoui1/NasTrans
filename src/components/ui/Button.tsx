import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "outlineLight";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
    primary: "bg-marine text-white hover:bg-marine-dark",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-white",
    light: "bg-white text-ink hover:bg-paper",
    outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
    md: "h-11 px-5 text-[0.95rem]",
    lg: "h-13 px-7 text-base",
};

export function buttonClasses({
    variant = "primary",
    size = "md",
    className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
    return cn(
        "inline-flex items-center justify-center gap-2 rounded-[3px] font-semibold transition-colors duration-150",
        "disabled:opacity-60 disabled:pointer-events-none",
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

export function ButtonLink({ className, variant, size, children, ...props }: ButtonLinkProps) {
    return (
        <Link className={buttonClasses({ variant, size, className })} {...props}>
            {children}
        </Link>
    );
}
