"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm border border-transparent",
        secondary:
            "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-sm border border-transparent",
        outline:
            "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5",
        ghost: "bg-transparent text-gray-600 hover:text-brand-primary hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg font-bold tracking-wide",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
}
