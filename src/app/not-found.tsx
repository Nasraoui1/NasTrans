import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="wrap py-28 md:py-40">
            <p className="display text-stamp text-[5rem] leading-none">404</p>
            <h1 className="display text-[2.6rem] md:text-[3.4rem] mt-4">Cette page n’existe pas</h1>
            <p className="mt-4 text-lg text-muted max-w-[50ch]">
                Elle a peut-être été déplacée. Revenez à l’accueil ou consultez nos services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/">Retour à l’accueil</ButtonLink>
                <ButtonLink href="/services" variant="outline">Voir les services</ButtonLink>
            </div>
        </div>
    );
}
