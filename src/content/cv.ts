import type { L } from "./types";

export type Education = {
  years: string;
  degree: L;
  school: string;
  location: L;
};

export const education: Education[] = [
  {
    years: "2018 – 2022",
    degree: { fr: "Master en Marketing International", en: "Master's in International Marketing" },
    school: "Institut des Relations Internationales du Cameroun (IRIC)",
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
  },
  {
    years: "2017 – 2018",
    degree: {
      fr: "Licence Professionnelle en Marketing Manager Opérationnel",
      en: "Professional Bachelor's in Operational Marketing Management",
    },
    school: "ISTAG – Fouda",
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
  },
  {
    years: "2016 – 2017",
    degree: {
      fr: "Brevet de Technicien Supérieur en Commerce International",
      en: "Advanced Technician's Certificate in International Trade",
    },
    school: "ISTAG – Fouda",
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
  },
  {
    years: "2014 – 2015",
    degree: { fr: "Baccalauréat A4 Espagnol", en: "Baccalauréat A4, Spanish" },
    school: "Collège Catholique Père Monti",
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
  },
];

export type Experience = {
  period: L;
  company: string;
  role: L;
  location: L;
  tasks: L[];
};

export const experiences: Experience[] = [
  {
    period: { fr: "2024", en: "2024" },
    company: "Jogoo Agriculture",
    role: { fr: "Community Manager", en: "Community Manager" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Stratégies digitales", en: "Digital strategies" },
      { fr: "Administration des réseaux", en: "Social network administration" },
      { fr: "Communication digitale et publicité", en: "Digital communication and advertising" },
      { fr: "Design graphique", en: "Graphic design" },
    ],
  },
  {
    period: { fr: "Depuis fév. 2023", en: "Since Feb. 2023" },
    company: "Makayla Fashion & Biserv Cameroon",
    role: { fr: "Community Manager – Directrice Marketing Digital", en: "Community Manager – Digital Marketing Director" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Formatrice en Community management", en: "Community management trainer" },
      { fr: "Stratégies digitales", en: "Digital strategies" },
      { fr: "Gestion des réseaux sociaux", en: "Social media management" },
      { fr: "Communication et publicité", en: "Communication and advertising" },
      { fr: "Design graphique", en: "Graphic design" },
    ],
  },
  {
    period: { fr: "Oct. – déc. 2022", en: "Oct. – Dec. 2022" },
    company: "Safvis (El Vino)",
    role: { fr: "Community Manager", en: "Community Manager" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Montage des visuels", en: "Visual editing" },
      { fr: "Photographie", en: "Photography" },
      { fr: "Gestion et animation des réseaux sociaux", en: "Social media management and animation" },
    ],
  },
  {
    period: { fr: "Juin 2022 – juil. 2023", en: "June 2022 – July 2023" },
    company: "Atelier Black Giraffe",
    role: { fr: "Manager Marketing Digital", en: "Digital Marketing Manager" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Stratégie de communication digitale", en: "Digital communication strategy" },
      { fr: "Design et gestion des réseaux sociaux", en: "Design and social media management" },
      { fr: "Publicité et community management", en: "Advertising and community management" },
    ],
  },
  {
    period: { fr: "Déc. 2021 – mars 2022", en: "Dec. 2021 – March 2022" },
    company: "Moulin de France",
    role: { fr: "Hôtesse de vente", en: "Sales hostess" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Gestion de la clientèle", en: "Customer management" },
      { fr: "Caissière", en: "Cashier" },
    ],
  },
  {
    period: { fr: "Juil. – août 2021", en: "July – Aug. 2021" },
    company: "Ministère des Arts et de la Culture",
    role: { fr: "Agent", en: "Agent" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Gestion de la clientèle", en: "Customer management" },
      { fr: "Traitement des dossiers des promoteurs culturels", en: "Processing cultural promoters' files" },
      { fr: "Notes et lettres au Ministre de l'Art et de la Culture", en: "Memos and letters to the Minister of Arts and Culture" },
    ],
  },
  {
    period: { fr: "Août – nov. 2020", en: "Aug. – Nov. 2020" },
    company: "Centre International de l'Artisanat de Yaoundé",
    role: { fr: "Manager du site Cameroon Gallery", en: "Cameroon Gallery site manager" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Élaboration des stratégies de communication", en: "Developing communication strategies" },
      { fr: "Publicité", en: "Advertising" },
      { fr: "Exposer les objets d'art sur le site Cameroon Gallery et sur Amazon", en: "Showcasing art pieces on the Cameroon Gallery site and on Amazon" },
      { fr: "Gestion de la clientèle lors des évènements", en: "Customer management during events" },
    ],
  },
  {
    period: { fr: "Fév. 2019 – déc. 2022", en: "Feb. 2019 – Dec. 2022" },
    company: "Novelpotta Cameroun",
    role: { fr: "Community Manager", en: "Community Manager" },
    location: { fr: "Yaoundé – Douala, Cameroun", en: "Yaoundé – Douala, Cameroon" },
    tasks: [
      { fr: "Administration des réseaux sociaux", en: "Social media administration" },
      { fr: "Design graphique", en: "Graphic design" },
      { fr: "Publicité et communication digitale", en: "Advertising and digital communication" },
    ],
  },
  {
    period: { fr: "Fév. – mai 2018", en: "Feb. – May 2018" },
    company: "Sté Nouguyma",
    role: { fr: "Commerciale", en: "Sales representative" },
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    tasks: [
      { fr: "Prospecter de nouveaux produits", en: "Prospecting new products" },
      { fr: "Achalander des marchandises", en: "Stocking merchandise" },
      { fr: "Étiqueter et vendre des produits", en: "Labelling and selling products" },
    ],
  },
];

export const competencies: L[] = [
  { fr: "Marketing Digital", en: "Digital Marketing" },
  { fr: "Gestion des réseaux sociaux", en: "Social media management" },
  { fr: "Copywrite et rédaction d'articles", en: "Copywriting and article writing" },
  { fr: "Design", en: "Design" },
  { fr: "Publicité", en: "Advertising" },
  { fr: "Gestion de la clientèle", en: "Customer relationship management" },
];

export const software: string[] = [
  "Microsoft Word",
  "Microsoft Excel",
  "Canva",
  "ChatGPT",
  "HootSuite",
];

export type LanguageSkill = { name: L; level: L };

export const languages: LanguageSkill[] = [
  {
    name: { fr: "Français", en: "French" },
    level: { fr: "Couramment lu, écrit et parlé", en: "Fluent — read, written and spoken" },
  },
  {
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Lu, écrit et parlé", en: "Read, written and spoken" },
  },
];

export const interests: L[] = [
  { fr: "Marketing", en: "Marketing" },
  { fr: "Lecture", en: "Reading" },
  { fr: "Culture", en: "Culture" },
  { fr: "Art et design", en: "Art and design" },
  { fr: "Mode", en: "Fashion" },
  { fr: "Sport", en: "Sport" },
  { fr: "Cosmétique", en: "Cosmetics" },
  { fr: "Voyage et tourisme", en: "Travel and tourism" },
  { fr: "Spectacle", en: "Live shows" },
];

export const engagements: L[] = [
  {
    fr: "Capitaine de l'équipe d'handball des étudiants de Marketing International, promotion 2018–2020 à l'IRIC",
    en: "Captain of the International Marketing students' handball team, 2018–2020 class at IRIC",
  },
  {
    fr: "Bénévole au Centre d'Orphelinat FACT d'Essos, Yaoundé",
    en: "Volunteer at the FACT Orphanage Centre in Essos, Yaoundé",
  },
];

export const birth: L = {
  fr: "Née le 23 février 1997 à Yaoundé",
  en: "Born on February 23, 1997 in Yaoundé",
};
