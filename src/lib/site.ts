// Informations centralisées de l'entreprise : à modifier ici uniquement.
// Utilisées par les pages, le pied de page, les données structurées (JSON-LD) et /llms.txt.

export const site = {
  name: "Nas-Trans Tunisie SARL",
  shortName: "Nas-Trans",
  url: "https://nas-trans.com",
  activity: "Commissionnaire en douane et transitaire",
  description:
    "Nas-Trans Tunisie SARL est un commissionnaire en douane et transitaire basé à Tunis depuis 1999 : formalités douanières, commerce extérieur, dédouanement et livraison sur tout le territoire tunisien.",
  foundingYear: 1999,
  legalForm: "SARL",
  phone: { label: "(+216) 71 256 462", href: "tel:+21671256462", e164: "+21671256462" },
  mobile: { label: "(+216) 21 321 321", href: "tel:+21621321321", e164: "+21621321321" },
  fax: "(+216) 71 256 462",
  emails: ["nastrans2021@gmail.com", "nastrans@hotmail.fr"],
  address: {
    street: "26 Rue Khereddine Barbarousse, RDC",
    city: "Tunis",
    postalCode: "1000",
    country: "TN",
    countryName: "Tunisie",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=26+Rue+Khereddine+Barbarousse+Tunis",
} as const;

export const yearsOfExperience = new Date().getFullYear() - site.foundingYear;

export type Faq = { q: string; a: string };

export type Service = {
  id: string;
  title: string;
  short: string;
  intro: string;
  body: string[];
  features: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    id: "formalites-douanieres",
    title: "Formalités douanières",
    short: "Déclarations en douane à l’import et à l’export, du classement de la marchandise jusqu’à la mainlevée.",
    intro:
      "Nous établissons et suivons vos déclarations en douane, à l’import comme à l’export, sur tout le territoire tunisien.",
    body: [
      "Chaque opération commence par le bon classement de la marchandise et le choix du régime douanier adapté. Nous préparons la déclaration, réunissons les documents exigés et la déposons auprès des services des douanes.",
      "Nous suivons ensuite le dossier jusqu’à la mainlevée : réponses aux demandes de l’administration, présence lors des contrôles, règlement des droits et taxes pour votre compte.",
    ],
    features: [
      "Classement tarifaire de la marchandise",
      "Établissement des déclarations en douane",
      "Régimes suspensifs et admission temporaire",
      "Suivi des contrôles jusqu’à la mainlevée",
    ],
    faqs: [
      {
        q: "Qu’est-ce que la mainlevée ?",
        a: "C’est l’autorisation donnée par la douane d’enlever la marchandise, une fois la déclaration acceptée, les contrôles éventuels effectués et les droits et taxes acquittés ou garantis.",
      },
      {
        q: "Qu’est-ce qu’un régime suspensif ?",
        a: "Un régime qui permet de faire entrer une marchandise sans payer immédiatement les droits et taxes, par exemple pour la transformer puis la réexporter (admission temporaire, entrepôt sous douane). Nous vous aidons à choisir le régime adapté et à en respecter les obligations.",
      },
    ],
  },
  {
    id: "commerce-exterieur",
    title: "Commerce extérieur",
    short: "Les formalités qui entourent vos importations et exportations, préparées avant l’arrivée de la marchandise.",
    intro:
      "Nous vous accompagnons dans toutes les formalités liées à vos importations et exportations, en amont de l’expédition.",
    body: [
      "Une opération de commerce extérieur ne se limite pas à la douane : titre de commerce extérieur, domiciliation bancaire, certificat d’origine, contrôle technique à l’importation selon les produits. Nous vous indiquons ce qui s’applique à votre opération et préparons les documents avec vous.",
      "Pour un premier import ou un produit soumis à une réglementation particulière, nous étudions le dossier avant l’expédition pour éviter les blocages à l’arrivée.",
    ],
    features: [
      "Conseil import et export",
      "Titres de commerce extérieur",
      "Certificats d’origine",
      "Veille réglementaire",
    ],
    faqs: [
      {
        q: "Qu’est-ce qu’un titre de commerce extérieur ?",
        a: "C’est le document, domicilié auprès d’une banque, qui encadre une opération d’importation ou d’exportation et son règlement financier. Le type de titre dépend de l’opération ; nous vous indiquons celui qui s’applique.",
      },
      {
        q: "Pouvez-vous m’accompagner pour un premier import ?",
        a: "Oui. Avant l’expédition, nous vérifions avec vous la réglementation applicable au produit, les documents à demander à votre fournisseur et le régime douanier à utiliser.",
      },
    ],
  },
  {
    id: "dedouanement-livraison",
    title: "Dédouanement et livraison",
    short: "Enlèvement de la marchandise et acheminement jusqu’à vos locaux, avec un seul interlocuteur.",
    intro:
      "Du dépôt de la déclaration à la livraison dans vos locaux, nous gérons l’enlèvement et l’acheminement de vos marchandises.",
    body: [
      "Une fois la mainlevée obtenue, nous organisons l’enlèvement de la marchandise et son transport jusqu’à votre adresse.",
      "Vous gardez un seul interlocuteur du bureau de douane jusqu’à votre entrepôt, et vous êtes prévenu dès que la marchandise est en route.",
    ],
    features: [
      "Enlèvement de la marchandise",
      "Livraison porte-à-porte",
      "Transport sécurisé",
      "Coordination logistique",
    ],
    faqs: [
      {
        q: "Livrez-vous partout en Tunisie ?",
        a: "Nous intervenons sur tout le territoire tunisien. Indiquez l’adresse de livraison dans votre demande de devis.",
      },
    ],
  },
  {
    id: "traitement-declarations",
    title: "Traitement des déclarations",
    short: "Des moyens dédiés pour vérifier, saisir et suivre vos déclarations rapidement.",
    intro:
      "Une équipe et des moyens dédiés pour vérifier, saisir, déposer et suivre vos déclarations en douane.",
    body: [
      "La rapidité d’un dédouanement dépend beaucoup de la qualité du dossier. Nous vérifions la cohérence des documents avant le dépôt, saisissons les déclarations et suivons leur avancement pour limiter les allers-retours avec l’administration.",
      "Vous êtes informé de l’état de votre dossier à chaque étape.",
    ],
    features: [
      "Vérification du dossier avant dépôt",
      "Saisie des déclarations",
      "Suivi de l’avancement",
      "Conformité réglementaire",
    ],
    faqs: [
      {
        q: "Combien de temps prend un dédouanement ?",
        a: "Cela dépend de la marchandise, du régime douanier, des contrôles décidés par la douane et de la complétude du dossier. Un dossier complet et cohérent dès le départ reste le meilleur moyen de gagner du temps.",
      },
    ],
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);

export const generalFaqs: Faq[] = [
  {
    q: "Qu’est-ce qu’un commissionnaire en douane ?",
    a: `Un professionnel qui accomplit les formalités de dédouanement pour le compte d’une entreprise ou d’un particulier : déclaration des marchandises, paiement des droits et taxes pour son compte, suivi des contrôles. Nas-Trans exerce ce métier à Tunis depuis ${site.foundingYear}.`,
  },
  {
    q: "Quels documents faut-il pour dédouaner une marchandise ?",
    a: "En général : la facture commerciale, la liste de colisage, le document de transport (connaissement ou lettre de transport aérien) et, selon les cas, le certificat d’origine, le titre de commerce extérieur et les certificats de contrôle technique ou sanitaire. Nous vous confirmons la liste exacte pour votre opération.",
  },
  {
    q: "Intervenez-vous à l’import et à l’export ?",
    a: "Oui. Nous prenons en charge les formalités dans les deux sens, ainsi que les régimes suspensifs comme l’admission temporaire.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: `Remplissez le formulaire de contact ou appelez le ${site.phone.label}. Précisez la nature de la marchandise, son origine ou sa destination, le mode de transport et l’adresse de livraison.`,
  },
  {
    q: "Où se trouvent vos bureaux ?",
    a: `Au ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.countryName}.`,
  },
];

export const allFaqs: Faq[] = [...generalFaqs, ...services.flatMap((s) => s.faqs)];

export const documents = [
  { name: "Facture commerciale", note: "" },
  { name: "Liste de colisage", note: "" },
  { name: "Connaissement ou lettre de transport aérien", note: "" },
  { name: "Titre de commerce extérieur", note: "domicilié en banque" },
  { name: "Certificat d’origine", note: "selon l’origine et les accords" },
  { name: "Certificats de contrôle technique ou sanitaire", note: "selon le produit" },
];

export const steps = [
  { title: "Vous nous transmettez le dossier", desc: "Nature de la marchandise, documents du fournisseur, mode de transport." },
  { title: "Nous vérifions et préparons", desc: "Classement de la marchandise, choix du régime, contrôle des documents." },
  { title: "Déclaration et suivi", desc: "Dépôt de la déclaration et suivi des contrôles jusqu’à la mainlevée." },
  { title: "Enlèvement et livraison", desc: "La marchandise est acheminée jusqu’à vos locaux." },
];
