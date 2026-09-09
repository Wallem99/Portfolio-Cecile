import type { L } from "./types";

export type Service = {
  slug: string;
  title: L;
  tagline: L;
  image: string;
  items: L[];
};

export const services: Service[] = [
  {
    slug: "gestion-reseaux-sociaux",
    title: { fr: "Gestion des réseaux sociaux", en: "Social media management" },
    tagline: {
      fr: "Gestion et animation des réseaux sociaux pour développer la visibilité, l'engagement et la communauté d'une marque.",
      en: "Managing and animating social media to grow a brand's visibility, engagement and community.",
    },
    image: "/images/services/social-media.webp",
    items: [
      { fr: "Création et gestion de pages professionnelles", en: "Creating and managing professional pages" },
      { fr: "Planification et programmation des publications", en: "Planning and scheduling posts" },
      { fr: "Animation et modération des communautés", en: "Community animation and moderation" },
      { fr: "Gestion des commentaires et messages", en: "Managing comments and messages" },
      { fr: "Suivi des performances et veille digitale", en: "Performance tracking and digital monitoring" },
    ],
  },
  {
    slug: "creation-contenu-marque",
    title: { fr: "Création de contenu de marque", en: "Brand content creation" },
    tagline: {
      fr: "Conception de contenus créatifs et cohérents avec l'identité, les objectifs et le positionnement de la marque.",
      en: "Designing creative content consistent with the brand's identity, goals and positioning.",
    },
    image: "/images/services/content-creation.webp",
    items: [
      { fr: "Posts et publications", en: "Posts and publications" },
      { fr: "Carrousels et infographies", en: "Carousels and infographics" },
      { fr: "Reels et vidéos courtes", en: "Reels and short videos" },
      { fr: "Stories et contenus interactifs", en: "Stories and interactive content" },
      { fr: "Calendriers éditoriaux et contenus thématiques", en: "Editorial calendars and themed content" },
    ],
  },
  {
    slug: "design-infographie",
    title: { fr: "Design & Infographie", en: "Design & Graphics" },
    tagline: {
      fr: "Création de supports visuels modernes et cohérents pour renforcer l'identité et la communication de la marque.",
      en: "Creating modern, consistent visuals to strengthen a brand's identity and communication.",
    },
    image: "/images/services/design.webp",
    items: [
      { fr: "Visuels pour les réseaux sociaux", en: "Social media visuals" },
      { fr: "Affiches et flyers", en: "Posters and flyers" },
      { fr: "Carrousels et infographies", en: "Carousels and infographics" },
      { fr: "Présentations professionnelles", en: "Professional presentations" },
      { fr: "Supports de communication", en: "Communication materials" },
    ],
  },
  {
    slug: "photographie",
    title: { fr: "Photographie", en: "Photography" },
    tagline: {
      fr: "Réalisation de contenus photographiques destinés à valoriser les produits, services, équipes et événements.",
      en: "Producing photographic content to showcase products, services, teams and events.",
    },
    image: "/images/services/photography.webp",
    items: [
      { fr: "Photographie de produits", en: "Product photography" },
      { fr: "Photographie corporate", en: "Corporate photography" },
      { fr: "Photographie événementielle", en: "Event photography" },
      { fr: "Mise en scène des produits", en: "Product styling" },
      { fr: "Retouche et sélection des photos", en: "Photo retouching and selection" },
    ],
  },
  {
    slug: "strategie-digitale",
    title: { fr: "Stratégie digitale", en: "Digital strategy" },
    tagline: {
      fr: "Élaboration de stratégies digitales adaptées aux objectifs de visibilité, de notoriété et d'engagement d'une marque.",
      en: "Developing digital strategies tailored to a brand's visibility, awareness and engagement goals.",
    },
    image: "/images/services/strategy.webp",
    items: [
      { fr: "Analyse de la présence digitale", en: "Digital presence audit" },
      { fr: "Définition des objectifs et des cibles", en: "Defining goals and target audiences" },
      { fr: "Positionnement et choix des plateformes", en: "Positioning and platform selection" },
      { fr: "Élaboration de stratégies de contenu", en: "Content strategy development" },
      { fr: "Suivi et analyse des résultats", en: "Results tracking and analysis" },
    ],
  },
  {
    slug: "community-management",
    title: { fr: "Community Management", en: "Community Management" },
    tagline: {
      fr: "Développement et animation d'une communauté afin de créer une relation durable entre la marque et son audience.",
      en: "Building and animating a community to create a lasting relationship between a brand and its audience.",
    },
    image: "/images/services/community.webp",
    items: [
      { fr: "Animation de la communauté", en: "Community animation" },
      { fr: "Interaction avec les abonnés", en: "Engaging with followers" },
      { fr: "Gestion des commentaires et messages", en: "Managing comments and messages" },
      { fr: "Création d'actions d'engagement", en: "Creating engagement actions" },
      { fr: "Fidélisation de la communauté", en: "Community loyalty building" },
    ],
  },
  {
    slug: "creation-montage-video",
    title: { fr: "Création & montage vidéo", en: "Video creation & editing" },
    tagline: {
      fr: "Création de vidéos courtes et dynamiques adaptées aux différents formats et plateformes digitales.",
      en: "Creating short, dynamic videos adapted to different digital formats and platforms.",
    },
    image: "/images/services/video.webp",
    items: [
      { fr: "Reels", en: "Reels" },
      { fr: "YouTube Shorts", en: "YouTube Shorts" },
      { fr: "Vidéos promotionnelles", en: "Promotional videos" },
      { fr: "Vidéos corporate et institutionnelles", en: "Corporate and institutional videos" },
    ],
  },
  {
    slug: "copywriting-redaction-web",
    title: { fr: "Copywriting & rédaction web", en: "Copywriting & web writing" },
    tagline: {
      fr: "Rédaction de contenus clairs, pertinents et engageants pour renforcer la communication et le storytelling d'une marque.",
      en: "Writing clear, relevant and engaging content to strengthen a brand's communication and storytelling.",
    },
    image: "/images/services/copywriting.webp",
    items: [
      { fr: "Légendes pour les réseaux sociaux", en: "Social media captions" },
      { fr: "Publications LinkedIn", en: "LinkedIn posts" },
      { fr: "Articles et contenus web", en: "Articles and web content" },
      { fr: "Scripts pour vidéos", en: "Video scripts" },
      { fr: "Storytelling et textes promotionnels", en: "Storytelling and promotional copy" },
    ],
  },
  {
    slug: "landing-pages-vitrines",
    title: { fr: "Création de landing pages & pages vitrines", en: "Landing & showcase pages" },
    tagline: {
      fr: "Conception de pages web modernes permettant de présenter une entreprise, une offre ou un produit et de faciliter la prise de contact.",
      en: "Designing modern web pages to present a business, an offer or a product and make it easy to get in touch.",
    },
    image: "/images/services/landing-pages.webp",
    items: [
      { fr: "Landing pages pour campagnes et offres", en: "Landing pages for campaigns and offers" },
      { fr: "Pages vitrines pour entreprises", en: "Showcase pages for businesses" },
      { fr: "Structuration et intégration des contenus", en: "Content structuring and integration" },
      { fr: "Mise en valeur des produits et services", en: "Highlighting products and services" },
      { fr: "Formulaires, boutons d'action et moyens de contact", en: "Forms, call-to-action buttons and contact options" },
    ],
  },
];
