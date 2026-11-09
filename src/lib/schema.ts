import { site, services, type Faq, type Service } from "@/lib/site";

// Données structurées schema.org (JSON-LD), lues par Google et par les moteurs IA.

export const orgId = `${site.url}/#organisation`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        alternateName: ["Nas-Trans", "Nastrans", "Nas Trans Tunisie"],
        description: site.description,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        image: `${site.url}/opengraph-image`,
        telephone: site.phone.e164,
        faxNumber: site.phone.e164,
        email: site.emails[0],
        foundingDate: String(site.foundingYear),
        knowsLanguage: ["fr", "ar"],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        areaServed: { "@type": "Country", name: "Tunisie" },
        knowsAbout: [
          "Dédouanement",
          "Formalités douanières",
          "Commerce extérieur",
          "Régimes suspensifs",
          "Admission temporaire",
          "Transit international",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone.e164,
            contactType: "customer service",
            areaServed: "TN",
            availableLanguage: ["French", "Arabic"],
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de douane et de transit",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.id}` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.shortName,
        inLanguage: "fr-TN",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    serviceType: service.title,
    url: `${site.url}/services/${service.id}`,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Tunisie" },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
