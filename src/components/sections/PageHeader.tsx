import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import type { ReactNode } from "react";

type Crumb = { name: string; href: string };

/** En-tête de page intérieure : fil d'Ariane (visible + JSON-LD), titre, chapô. */
export default function PageHeader({
    crumbs,
    title,
    children,
}: {
    crumbs: Crumb[];
    title: string;
    children?: ReactNode;
}) {
    const all = [{ name: "Accueil", href: "/" }, ...crumbs];
    return (
        <header className="border-b border-rule">
            <JsonLd data={breadcrumbSchema(all)} />
            <div className="wrap pt-10 pb-12 md:pt-14 md:pb-16">
                <nav aria-label="Fil d’Ariane" className="text-sm text-muted mb-6">
                    <ol className="flex flex-wrap gap-x-2">
                        {all.map((c, i) => (
                            <li key={c.href} className="flex gap-x-2">
                                {i > 0 && <span aria-hidden="true">/</span>}
                                {i === all.length - 1 ? (
                                    <span aria-current="page" className="text-ink">{c.name}</span>
                                ) : (
                                    <Link href={c.href} className="hover:text-ink underline-offset-4 hover:underline">{c.name}</Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <h1 className="display text-ink text-[2.6rem] md:text-[4rem] max-w-[16ch]">{title}</h1>
                {children && <div className="mt-6 max-w-[60ch] text-lg text-muted leading-relaxed">{children}</div>}
            </div>
        </header>
    );
}
