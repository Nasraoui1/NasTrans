// Informations centralisées de l'entreprise : à modifier ici uniquement.
export const site = {
  name: "Nas-Trans Tunisie SARL",
  shortName: "Nas-Trans",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.nas-trans.com",
  description:
    "Commissionnaire en douane et transitaire à Tunis depuis 1999 : formalités douanières, commerce extérieur, dédouanement et livraison sur tout le territoire tunisien.",
  foundingYear: 1999,
  phone: { label: "(+216) 71 256 462", href: "tel:+21671256462" },
  mobile: { label: "(+216) 21 321 321", href: "tel:+21621321321" },
  fax: "(+216) 71 256 462",
  emails: ["nastrans2021@gmail.com", "nastrans@hotmail.fr"],
  address: {
    street: "26 Rue Khereddine Barbarousse, RDC",
    city: "Tunis",
    postalCode: "1000",
    country: "TN",
    countryName: "Tunisie",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=26+Rue+Khereddine+Barbarousse+Tunis",
} as const;

export const yearsOfExperience = new Date().getFullYear() - site.foundingYear;

export const services = [
  {
    id: "formalites-douanieres",
    title: "Formalités Douanières",
    short: "Gestion complète de vos déclarations et procédures douanières.",
    description:
      "Nous assurons toutes les procédures et opérations de formalités douanières sur tout le territoire tunisien.",
    features: ["Procédures douanières", "Régimes suspensifs", "Admission temporaire", "Assistance technique"],
  },
  {
    id: "commerce-exterieur",
    title: "Commerce Extérieur",
    short: "Assistance et conseils pour toutes vos opérations d’import/export.",
    description:
      "Prise en charge complète de toutes les opérations et formalités liées au commerce extérieur.",
    features: ["Conseil import/export", "Titres de commerce", "Réglementation", "Dossiers complexes"],
  },
  {
    id: "dedouanement-livraison",
    title: "Dédouanement & Livraison",
    short: "Dédouanement et acheminement de vos marchandises jusqu’à vos locaux.",
    description:
      "Garantie d’efficacité et de fiabilité pour le dédouanement de vos marchandises jusqu’à vos locaux.",
    features: ["Livraison porte-à-porte", "Enlèvement marchandise", "Transport sécurisé", "Logistique"],
  },
  {
    id: "traitement-declarations",
    title: "Traitement des Déclarations",
    short: "Des moyens dédiés pour un traitement rapide de vos déclarations.",
    description:
      "Moyens et ressources assurant une rapidité optimale du traitement de vos déclarations douanières.",
    features: ["Saisie rapide", "Suivi de dossier", "Optimisation des délais", "Conformité totale"],
  },
] as const;
