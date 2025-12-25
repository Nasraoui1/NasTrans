import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
                            <span className="text-white">NAS</span>
                            <span className="text-brand-primary">TRANS</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            La logistique réinventée. Nous livrons l'avenir du transport avec rapidité, précision et technologie avancée.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Formalités Douanières</li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Commerce Extérieur</li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Dédouanement</li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Gestion Déclarations</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Société</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">
                                <Link href="/about">À propos</Link>
                            </li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Carrières</li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">Actualités</li>
                            <li className="hover:text-brand-primary cursor-pointer transition-colors">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Nastrans. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <span>Politique de Confidentialité</span>
                        <span>Conditions d'Utilisation</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
