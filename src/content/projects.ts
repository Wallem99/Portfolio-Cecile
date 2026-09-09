import type { L } from "./types";

export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok";
  url: string;
};

export type Project = {
  slug: string;
  name: string;
  logo?: string; // public/images/logos/<file>
  category: "social" | "design";
  summary: L;
  imageCount: number; // images live at public/images/projects/<slug>/01.webp..NN.webp
  socials?: SocialLink[];
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
