"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ferme le menu mobile avec la touche Échap
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    const solid = scrolled || isOpen;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${solid
                ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <nav aria-label="Navigation principale" className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tighter hover:opacity-80 transition-opacity" aria-label={`${site.shortName} – Accueil`}>
                    <span className="text-slate-900">NAS</span>
                    <span className="text-brand-primary">TRANS</span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`relative text-sm font-medium transition-colors hover:text-brand-primary ${active ? "text-brand-primary" : "text-slate-600"}`}
                            >
                                {link.name}
                                {active && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <ButtonLink href="/contact" size="sm">Demander un devis</ButtonLink>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="md:hidden text-slate-900 p-1 -mr-1 rounded-md focus-visible:ring-2 focus-visible:ring-brand-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                    aria-controls="menu-mobile"
                >
                    {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="menu-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    className={`text-lg font-medium ${pathname === link.href ? "text-brand-primary" : "text-slate-600"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href={site.phone.href} className="flex items-center gap-2 text-slate-600 pt-2 border-t border-slate-100">
                                <PhoneIcon className="w-5 h-5 text-brand-primary" />
                                {site.phone.label}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
