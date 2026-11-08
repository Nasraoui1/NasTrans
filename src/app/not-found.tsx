import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 bg-slate-50">
      <div className="text-center space-y-6 max-w-lg">
        <p className="text-brand-primary font-bold text-6xl font-heading">404</p>
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">Page introuvable</h1>
        <p className="text-gray-600">La page que vous recherchez n’existe pas ou a été déplacée.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/contact" variant="outline">Nous contacter</ButtonLink>
        </div>
      </div>
    </div>
  );
}
