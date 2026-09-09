import type { L } from "./types";

export const identity = {
  firstName: "Cécile Claude",
  lastName: "Ngo Ntonga",
  handle: "@cecilentonga",
  role: {
    fr: "Community Manager · Designer · Copywriter",
    en: "Community Manager · Designer · Copywriter",
  } satisfies L,
  tagline: {
    fr: "Marketing Digital & Communication",
    en: "Digital Marketing & Communication",
  } satisfies L,
  location: {
    fr: "Yaoundé, Cameroun",
    en: "Yaoundé, Cameroon",
  } satisfies L,
  email: "cecilentonga13@gmail.com",
  phone: "+237 655 634 728",
  address: {
    fr: "Rue 4.582 Mimboman, Yaoundé 4, Cameroun",
    en: "Rue 4.582 Mimboman, Yaoundé 4, Cameroon",
  } satisfies L,
};

export const heroBio: L = {
  fr: "Passionnée de communication digitale et de design depuis 2022, j'aide les marques à construire une identité visuelle sobre, élégante et attrayante sur les réseaux sociaux.",
  en: "Passionate about digital communication and design since 2022, I help brands build a clean, elegant and engaging visual identity across social media.",
};

export const parcours: L = {
  fr: "Je m'appelle Cécile Claude NGO NTONGA, une passionnée de communication digitale et du design. Depuis 2022, j'ai fait de cette passion mon métier et de mon parcours académique mon domaine. Diplômée d'une Licence en Marketing Management Opérationnel et d'un Master en Marketing International, je me suis immergée dans des secteurs variés allant de la gestion des stratégies de communication à la création de contenus pour plusieurs entreprises. Forte de ma compréhension aiguisée des tendances émergentes et des comportements en ligne, j'ai su travailler sur des projets me permettant aujourd'hui de comprendre les besoins spécifiques de chaque client et d'y répondre avec des solutions personnalisées.",
  en: "My name is Cécile Claude NGO NTONGA, passionate about digital communication and design. Since 2022, I've turned this passion into my profession and my academic background into my field of expertise. Holding a Bachelor's in Operational Marketing Management and a Master's in International Marketing, I've worked across varied sectors — from communication strategy management to content creation for several companies. With a sharp understanding of emerging trends and online behaviour, I've worked on projects that let me understand each client's specific needs today and answer them with tailor-made solutions.",
};

export const vision: L = {
  fr: "Construire pour chaque entreprise une identité visuelle sobre, élégante et attrayante sur les réseaux sociaux grâce à une création de contenu stratégique, transformer les idées en actions concrètes. À travers la communication, je cherche à raconter des histoires percutantes, à valoriser des produits et services et à apporter aux consommateurs une expérience unique.",
  en: "Building a clean, elegant and appealing visual identity for every company on social media through strategic content creation, turning ideas into concrete action. Through communication, I aim to tell impactful stories, showcase products and services, and bring consumers a unique experience.",
};

export const contributionIntro: L = {
  fr: "Forte de mon approche créative, dynamique et stratégique, je peux aider les marques à :",
  en: "With a creative, dynamic and strategic approach, I can help brands to:",
};

export type ApproachStep = { title: L; };

export const approach: ApproachStep[] = [
  { title: { fr: "Analyser et comprendre leur niche", en: "Analyze and understand their niche" } },
  { title: { fr: "Concevoir une stratégie de contenu", en: "Design a content strategy" } },
  { title: { fr: "Construire un calendrier éditorial et un Social Media Planner", en: "Build an editorial calendar and a Social Media Planner" } },
  { title: { fr: "Gérer la communication digitale", en: "Manage digital communication" } },
  { title: { fr: "Maintenir les interactions et faire des Reporting", en: "Maintain engagement and produce reporting" } },
];

export type Value = { title: L; description: L };

export const values: Value[] = [
  {
    title: { fr: "Créativité et innovation", en: "Creativity and innovation" },
    description: {
      fr: "Proposer des contenus originaux et des stratégies innovantes qui permettent de se démarquer.",
      en: "Offering original content and innovative strategies that help brands stand out.",
    },
  },
  {
    title: { fr: "Responsabilité", en: "Responsibility" },
    description: {
      fr: "Gérer les situations délicates tout en restant fidèle à l'identité de l'entreprise.",
      en: "Handling delicate situations while staying true to the company's identity.",
    },
  },
  {
    title: { fr: "Passion", en: "Passion" },
    description: {
      fr: "Travailler avec énergie et enthousiasme est indispensable pour une communication bien menée, je travaille en y mettant tout mon cœur.",
      en: "Working with energy and enthusiasm is essential to well-run communication — I put my whole heart into it.",
    },
  },
  {
    title: { fr: "Quête de l'excellence", en: "Pursuit of excellence" },
    description: {
      fr: "Je mène chaque projet avec un souci de perfection et une amélioration constante.",
      en: "I lead every project with attention to detail and constant improvement.",
    },
  },
  {
    title: { fr: "Ouverture d'esprit", en: "Open-mindedness" },
    description: {
      fr: "Je m'attèle à accueillir et respecter les idées variées.",
      en: "I make it a point to welcome and respect a variety of ideas.",
    },
  },
];

export const methodIntro: L = {
  fr: "Ma démarche repose sur des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes et Temporels) pour l'efficacité de chaque projet. Ma méthode CCMA est au cœur de ma démarche :",
  en: "My approach relies on SMART objectives (Specific, Measurable, Achievable, Realistic and Time-bound) for the effectiveness of every project. My CCMA method is at the heart of it:",
};

export type CcmaStep = { letter: string; title: L; description: L };

export const ccma: CcmaStep[] = [
  {
    letter: "C",
    title: { fr: "Cible", en: "Target" },
    description: {
      fr: "Connaître et comprendre le public avec lequel il faut communiquer permet d'adopter une stratégie personnalisée et efficace.",
      en: "Knowing and understanding the audience to communicate with makes it possible to adopt a personalized, effective strategy.",
    },
  },
  {
    letter: "C",
    title: { fr: "Contenu", en: "Content" },
    description: {
      fr: "Je mets ma créativité au cœur de cette étape pour un contenu original et engageant.",
      en: "I put my creativity at the heart of this step for original, engaging content.",
    },
  },
  {
    letter: "M",
    title: { fr: "Management", en: "Management" },
    description: {
      fr: "Gérer la mise en œuvre de la stratégie et coordonner les actions.",
      en: "Managing the strategy's implementation and coordinating actions.",
    },
  },
  {
    letter: "A",
    title: { fr: "Analyse", en: "Analysis" },
    description: {
      fr: "Observer les indicateurs de performance, analyser et optimiser.",
      en: "Monitoring performance indicators, analyzing and optimizing.",
    },
  },
];

export const stats = [
  { value: "9+", label: { fr: "Expériences professionnelles", en: "Professional experiences" } satisfies L },
  { value: "9", label: { fr: "Marques accompagnées", en: "Brands supported" } satisfies L },
  { value: "50+", label: { fr: "Visuels créés", en: "Visuals created" } satisfies L },
];
