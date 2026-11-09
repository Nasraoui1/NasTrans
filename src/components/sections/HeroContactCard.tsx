import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

const rows = [
    { icon: PhoneIcon, label: "Téléphone", value: site.phone.label, href: site.phone.href },
    { icon: DevicePhoneMobileIcon, label: "GSM", value: site.mobile.label, href: site.mobile.href },
    { icon: EnvelopeIcon, label: "E-mail", value: site.emails[0], href: `mailto:${site.emails[0]}` },
    {
        icon: MapPinIcon,
        label: "Bureaux",
        value: `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
        href: site.mapsUrl,
    },
];

export default function HeroContactCard() {
    return (
        <div className="bg-white border border-rule rounded-[4px] shadow-[0_1px_0_var(--color-rule),0_24px_48px_-28px_rgba(19,36,58,0.35)]">
            <div className="border-b border-rule px-6 py-5 md:px-8">
                <h2 className="text-xl font-semibold text-ink">Parlons de votre opération</h2>
                <p className="mt-1 text-muted">Appelez, écrivez-nous ou passez à nos bureaux.</p>
            </div>
            <ul>
                {rows.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="border-b border-rule last:border-b-0">
                        <a
                            href={href}
                            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group flex items-start gap-4 px-6 py-4 md:px-8 hover:bg-paper transition-colors"
                        >
                            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-marine" aria-hidden="true" />
                            <span className="min-w-0">
                                <span className="block text-sm text-muted">{label}</span>
                                <span className="block font-semibold text-ink break-words group-hover:text-marine">{value}</span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="border-t border-rule bg-paper/60 px-6 py-5 md:px-8">
                <ButtonLink href="/contact" className="w-full">Demander un devis</ButtonLink>
            </div>
        </div>
    );
}
