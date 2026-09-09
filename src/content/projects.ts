import type { L } from "./types";

export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok";
  url: string;
};

export type CaseStudyMetric = {
  /** A real, verifiable number (e.g. "5") or a placeholder like "XX%" to be
   * replaced with a real figure once available — never a fabricated stat. */
  value: string;
  label: L;
};

export type CaseStudy = {
  problem: L;
  solution: L;
  result: L;
  metrics: CaseStudyMetric[];
};

export type Project = {
  slug: string;
  name: string;
  logo?: string; // public/images/logos/<file>
  category: "social" | "design";
  summary: L;
  imageCount: number; // images live at public/images/projects/<slug>/01.webp..NN.webp
  socials?: SocialLink[];
  /** Only set for projects backed by a documented CV mission (task list). */
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "jogoo-agriculture",
    name: "Jogoo Agriculture",
    logo: "/images/logos/jogoo-agriculture.webp",
    category: "social",
    summary: {
      fr: "Gestion complète des réseaux sociaux (Facebook, Instagram, LinkedIn, YouTube, TikTok) et création de visuels de campagne pour cette marque agricole.",
      en: "Full social media management (Facebook, Instagram, LinkedIn, YouTube, TikTok) and campaign visuals for this agriculture brand.",
    },
    imageCount: 8,
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/Jogoo.Agriculture" },
      { platform: "instagram", url: "https://www.instagram.com/jogoo.agriculture/" },
      { platform: "linkedin", url: "https://tr.linkedin.com/company/jogoo-agri" },
      { platform: "youtube", url: "http://www.youtube.com/@sunstreamirrigationafricaf9048" },
      { platform: "tiktok", url: "https://www.tiktok.com/@jogoo_agricultures" },
    ],
    caseStudy: {
      problem: {
        fr: "Jogoo Agriculture avait besoin d'une présence professionnelle et cohérente sur cinq plateformes à la fois — Facebook, Instagram, LinkedIn, YouTube et TikTok — sans stratégie de contenu unifiée pour les faire vivre au quotidien.",
        en: "Jogoo Agriculture needed a professional, consistent presence across five platforms at once — Facebook, Instagram, LinkedIn, YouTube and TikTok — without a unified content strategy to run them day to day.",
      },
      solution: {
        fr: "Élaboration d'une stratégie digitale complète : administration quotidienne des réseaux, création de visuels de campagne et gestion de la publicité pour construire une identité de marque cohérente sur chaque plateforme.",
        en: "Built a full digital strategy: daily administration of the networks, campaign visual creation and advertising management to build a consistent brand identity across every platform.",
      },
      result: {
        fr: "Une présence de marque unifiée sur l'ensemble des canaux digitaux, avec un rythme de publication régulier et des visuels de campagne alignés sur l'identité de Jogoo Agriculture.",
        en: "A unified brand presence across all digital channels, with a regular posting rhythm and campaign visuals aligned with Jogoo Agriculture's identity.",
      },
      metrics: [
        { value: "5", label: { fr: "Plateformes gérées", en: "Platforms managed" } },
        { value: "8", label: { fr: "Visuels de campagne créés", en: "Campaign visuals created" } },
        { value: "XX%", label: { fr: "Croissance de l'engagement", en: "Engagement growth" } },
      ],
    },
  },
  {
    slug: "jus-delice",
    name: "Jus Délice 100% Naturel",
    logo: "/images/logos/jus-delice.webp",
    category: "design",
    summary: {
      fr: "Création de visuels publicitaires et de contenu produit pour cette marque de jus naturels.",
      en: "Advertising visuals and product content creation for this natural juice brand.",
    },
    imageCount: 8,
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/share/1DvdSPb5mU/?mibextid=wwXIfr" },
    ],
  },
  {
    slug: "yoomee-cameroun",
    name: "Yoomee Cameroun",
    logo: "/images/logos/yoomee-cameroun.webp",
    category: "social",
    summary: {
      fr: "Page Facebook gérée pour l'opérateur télécom Yoomee Cameroun.",
      en: "Facebook page managed for the telecom operator Yoomee Cameroun.",
    },
    imageCount: 0,
    socials: [{ platform: "facebook", url: "https://www.facebook.com/YoomeeMobile" }],
  },
  {
    slug: "atelier-black-giraffe",
    name: "Atelier Black Giraffe",
    logo: "/images/logos/atelier-black-giraffe.webp",
    category: "social",
    summary: {
      fr: "Manager Marketing Digital : stratégie de communication, design et gestion des réseaux sociaux de cet atelier de couture.",
      en: "Digital Marketing Manager: communication strategy, design and social media management for this fashion workshop.",
    },
    imageCount: 0,
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/profile.php?id=100064146367375" },
    ],
    caseStudy: {
      problem: {
        fr: "L'atelier de couture avait besoin d'une stratégie de communication digitale structurée pour valoriser son savoir-faire artisanal et développer sa clientèle en ligne.",
        en: "The fashion workshop needed a structured digital communication strategy to showcase its craftsmanship and grow its customer base online.",
      },
      solution: {
        fr: "Prise en charge complète de la stratégie digitale : design et gestion des réseaux sociaux, publicité ciblée et community management au quotidien, sur une mission de juin 2022 à juillet 2023.",
        en: "Took full ownership of the digital strategy: social media design and management, targeted advertising and day-to-day community management, on a mission from June 2022 to July 2023.",
      },
      result: {
        fr: "Une identité visuelle cohérente sur les réseaux sociaux et une relation client entretenue en continu tout au long de la mission.",
        en: "A consistent visual identity across social media and an ongoing customer relationship maintained throughout the mission.",
      },
      metrics: [
        { value: "1", label: { fr: "Plateforme gérée", en: "Platform managed" } },
        { value: "XX%", label: { fr: "Croissance des abonnés", en: "Follower growth" } },
      ],
    },
  },
  {
    slug: "biserv-cameroon",
    name: "Biserv Cameroon",
    logo: "/images/logos/biserv-cameroon.webp",
    category: "social",
    summary: {
      fr: "Community Manager & Directrice Marketing Digital : stratégies digitales, design et communication pour ce centre de formation.",
      en: "Community Manager & Digital Marketing Director: digital strategies, design and communication for this training center.",
    },
    imageCount: 0,
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/profile.php?id=61566148497891" },
    ],
    caseStudy: {
      problem: {
        fr: "Biserv Cameroon souhaitait structurer sa communication digitale et professionnaliser sa présence sur les réseaux, tout en formant ses équipes aux bonnes pratiques du community management.",
        en: "Biserv Cameroon wanted to structure its digital communication and professionalize its social presence, while training its team on community management best practices.",
      },
      solution: {
        fr: "Direction marketing digital complète depuis février 2023 : formation en community management, définition des stratégies digitales, gestion des réseaux sociaux, communication, publicité et design graphique.",
        en: "Full digital marketing direction since February 2023: community management training, digital strategy definition, social media management, communication, advertising and graphic design.",
      },
      result: {
        fr: "Une fonction marketing digital structurée en interne, avec une présence de marque cohérente et une équipe formée aux bonnes pratiques du community management.",
        en: "An in-house digital marketing function now in place, with a consistent brand presence and a team trained in community management best practices.",
      },
      metrics: [
        { value: "1", label: { fr: "Plateforme gérée", en: "Platform managed" } },
        { value: "XX%", label: { fr: "Croissance de l'engagement", en: "Engagement growth" } },
      ],
    },
  },
  {
    slug: "safvis-sa",
    name: "Safvis SA",
    logo: "/images/logos/safvis-sa.webp",
    category: "social",
    summary: {
      fr: "Community management pour Safvis (El Vino) : montage des visuels, photographie et animation des réseaux.",
      en: "Community management for Safvis (El Vino): visual editing, photography and social media animation.",
    },
    imageCount: 0,
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/profile.php?id=100086954602268" },
    ],
    caseStudy: {
      problem: {
        fr: "Safvis (El Vino) avait besoin de contenus visuels professionnels et d'une animation régulière de ses réseaux sociaux pour présenter ses produits.",
        en: "Safvis (El Vino) needed professional visual content and regular social media animation to showcase its products.",
      },
      solution: {
        fr: "Prise en charge du montage des visuels, de la photographie produit et de l'animation quotidienne des réseaux sociaux, d'octobre à décembre 2022.",
        en: "Handled visual editing, product photography and day-to-day social media animation, from October to December 2022.",
      },
      result: {
        fr: "Une bibliothèque de visuels produit cohérente et une présence sociale animée en continu sur la durée de la mission.",
        en: "A consistent product visual library and an ongoing social presence throughout the mission.",
      },
      metrics: [
        { value: "1", label: { fr: "Plateforme gérée", en: "Platform managed" } },
        { value: "XX%", label: { fr: "Croissance de l'engagement", en: "Engagement growth" } },
      ],
    },
  },
  {
    slug: "provaressc",
    name: "Provaressc",
    category: "design",
    summary: {
      fr: "Visuels de campagne institutionnelle (sensibilisation, santé publique) réalisés pour Provaressc.",
      en: "Institutional campaign visuals (awareness, public health) created for Provaressc.",
    },
    imageCount: 6,
  },
  {
    slug: "amani-bio-health-care",
    name: "Amani Bio Health Care",
    category: "design",
    summary: {
      fr: "Flyers et visuels produit pour cette marque de cosmétiques naturels.",
      en: "Flyers and product visuals for this natural cosmetics brand.",
    },
    imageCount: 5,
  },
  {
    slug: "makayla-fashion",
    name: "Makayla Fashion",
    category: "design",
    summary: {
      fr: "Visuels promotionnels et jeux-concours pour cette marque de mode.",
      en: "Promotional visuals and giveaways for this fashion brand.",
    },
    imageCount: 5,
    caseStudy: {
      problem: {
        fr: "Makayla Fashion avait besoin de visuels promotionnels engageants pour animer ses réseaux sociaux et ses temps forts commerciaux (jeux-concours, opérations spéciales).",
        en: "Makayla Fashion needed engaging promotional visuals to animate its social media and commercial highlights (giveaways, special campaigns).",
      },
      solution: {
        fr: "Création de visuels de campagne et de jeux-concours pensés pour maximiser l'engagement, dans le cadre de la direction marketing digital de la marque depuis février 2023.",
        en: "Created campaign visuals and giveaway content designed to maximize engagement, as part of the brand's digital marketing direction since February 2023.",
      },
      result: {
        fr: "Des campagnes visuelles cohérentes avec l'identité de marque, conçues pour stimuler la participation et la visibilité sur les réseaux.",
        en: "Visual campaigns consistent with the brand identity, designed to boost participation and visibility on social media.",
      },
      metrics: [
        { value: "5", label: { fr: "Visuels de campagne créés", en: "Campaign visuals created" } },
        { value: "XX%", label: { fr: "Croissance de l'engagement", en: "Engagement growth" } },
      ],
    },
  },
  {
    slug: "savon-noir-du-ghana",
    name: "Savon Noir du Ghana",
    category: "design",
    summary: {
      fr: "Photographie produit et visuels de mise en scène pour cette gamme de cosmétiques artisanaux.",
      en: "Product photography and lifestyle visuals for this artisanal cosmetics range.",
    },
    imageCount: 8,
  },
  {
    slug: "artiste-chanteur",
    name: "Artiste Chanteur",
    category: "design",
    summary: {
      fr: "Visuels de promotion de concert et d'image d'artiste.",
      en: "Concert promotion and artist image visuals.",
    },
    imageCount: 4,
  },
  {
    slug: "autres-visuels",
    name: "Autres visuels",
    category: "design",
    summary: {
      fr: "Sélection d'autres créations : casting, formations et campagnes diverses.",
      en: "A selection of other creations: casting calls, trainings and various campaigns.",
    },
    imageCount: 5,
  },
  {
    slug: "logos-realises",
    name: "Logos réalisés",
    category: "design",
    summary: {
      fr: "Quelques logos conçus pour des marques et associations.",
      en: "A few logos designed for brands and associations.",
    },
    imageCount: 2,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
