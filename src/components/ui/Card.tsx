"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    hoverEffect?: boolean;
}

export default function Card({ className, children, hoverEffect = true, ...props }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)" } : undefined}
            className={cn(
                "bg-brand-surface border border-gray-200 p-6 rounded-xl shadow-sm transition-all duration-300",
                hoverEffect && "hover:border-brand-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
