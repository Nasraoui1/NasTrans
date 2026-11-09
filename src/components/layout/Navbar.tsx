"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ButtonLink } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Questions fréquentes", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-rule">
            <nav aria-label="Navigation principale" className="wrap flex h-18 items-center justify-between gap-6">
                <Link href="/" aria-label={`${site.shortName}, accueil`} onClick={() => setIsOpen(false)}>
                    <Logo />
                </Link>

                <div className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={cn(
                                "text-[0.95rem] py-1 border-b-2 transition-colors",
                                isActive(link.href)
                                    ? "border-stamp text-ink font-medium"
                                    : "border-transparent text-muted hover:text-ink"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-5">
                    <a href={site.phone.href} className="flex items-center gap-2 text-[0.95rem] font-medium text-ink hover:text-marine">
                        <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                        {site.phone.label}
                    </a>
                    <ButtonLink href="/contact">Demander un devis</ButtonLink>
                </div>

                <button
                    type="button"
                    className="lg:hidden -mr-2 p-2 text-ink"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                    aria-controls="menu-mobile"
                >
                    {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                </button>
            </nav>

            {isOpen && (
                <div id="menu-mobile" className="lg:hidden border-t border-rule bg-paper">
                    <div className="wrap flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={cn(
                                    "py-3 text-lg border-b border-rule/70",
                                    isActive(link.href) ? "text-ink font-semibold" : "text-muted"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href={site.phone.href} className="flex items-center gap-2 py-4 text-lg font-medium text-ink">
                            <PhoneIcon className="w-5 h-5 text-marine" aria-hidden="true" />
                            {site.phone.label}
                        </a>
                        <ButtonLink href="/contact" size="lg" onClick={() => setIsOpen(false)}>
                            Demander un devis
                        </ButtonLink>
                    </div>
                </div>
            )}
        </header>
    );
}
