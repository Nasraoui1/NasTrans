import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { site, services } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
                            <span className="text-white">NAS</span>
                            <span className="text-blue-400">TRANS</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Commissionnaire en douane et transitaire à Tunis depuis {site.foundingYear}. Votre partenaire pour toutes vos formalités douanières et de commerce extérieur.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-bold mb-4">Services</h2>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            {services.map((s) => (
                                <li key={s.id}>
                                    <Link href={`/services#${s.id}`} className="hover:text-blue-400 transition-colors">
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-bold mb-4">Société</h2>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">À propos</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Nos services</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact & devis</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-bold mb-4">Coordonnées</h2>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li>
                                <a href={site.phone.href} className="flex items-start gap-2 hover:text-blue-400 transition-colors">
                                    <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0" />{site.phone.label}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${site.emails[0]}`} className="flex items-start gap-2 hover:text-blue-400 transition-colors break-all">
                                    <EnvelopeIcon className="w-4 h-4 mt-0.5 shrink-0" />{site.emails[0]}
                                </a>
                            </li>
                            <li>
                                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-blue-400 transition-colors">
                                    <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span>{site.address.street}<br />{site.address.postalCode} {site.address.city}, {site.address.countryName}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-center md:text-left">
                    <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
