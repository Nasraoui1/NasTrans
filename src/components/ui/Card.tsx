import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    hoverEffect?: boolean;
}

export default function Card({ className, children, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-brand-surface border border-gray-200 p-6 rounded-xl shadow-sm transition-all duration-300",
                hoverEffect && "hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
