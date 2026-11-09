import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { site, services } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="bg-ink text-white/70 text-[0.95rem]">
            <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
                <div className="space-y-4 max-w-xs">
                    <Logo light />
                    <p className="leading-relaxed">
                        {site.activity} à Tunis depuis {site.foundingYear}.
                    </p>
                </div>

                <div>
                    <h2 className="text-white font-semibold mb-4">Services</h2>
                    <ul className="space-y-2.5">
                        {services.map((s) => (
                            <li key={s.id}>
                                <Link href={`/services/${s.id}`} className="hover:text-white">{s.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-semibold mb-4">Société</h2>
                    <ul className="space-y-2.5">
                        <li><Link href="/about" className="hover:text-white">À propos</Link></li>
                        <li><Link href="/faq" className="hover:text-white">Questions fréquentes</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact et devis</Link></li>
                    </ul>
                </div>

                <address className="not-italic space-y-2.5">
                    <h2 className="text-white font-semibold mb-4">Coordonnées</h2>
                    <p>
                        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            {site.address.street}<br />
                            {site.address.postalCode} {site.address.city}, {site.address.countryName}
                        </a>
                    </p>
                    <p>Tél. <a href={site.phone.href} className="hover:text-white">{site.phone.label}</a></p>
                    <p>GSM <a href={site.mobile.href} className="hover:text-white">{site.mobile.label}</a></p>
                    <p><a href={`mailto:${site.emails[0]}`} className="hover:text-white break-all">{site.emails[0]}</a></p>
                </address>
            </div>
            <div className="border-t border-white/10">
                <p className="wrap py-6 text-sm text-white/50">
                    © {new Date().getFullYear()} {site.name}. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
