"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Respecte le réglage système « réduire les animations » des visiteurs.
export default function Providers({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
