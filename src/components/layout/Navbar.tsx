"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-heading tracking-tighter hover:opacity-80 transition-opacity">
                    <span className="text-slate-900">NAS</span>
                    <span className="text-brand-primary">TRANS</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm font-medium transition-colors hover:text-brand-primary ${pathname === link.href ? "text-brand-primary" : "text-slate-600"
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                                />
                            )}
                        </Link>
                    ))}

                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
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
                                    className={`text-lg font-medium ${pathname === link.href ? "text-brand-primary" : "text-slate-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
