# Portfolio — Cécile Claude Ngo Ntonga

Site portfolio Next.js (App Router) bilingue FR/EN, généré à partir du CV et
du portfolio créatif de Cécile Claude Ngo Ntonga (Community Manager /
Designer / Copywriter).

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000` (redirection automatique
vers `/fr` ou `/en` selon la langue du navigateur).

## Structure

- `src/content/` — **toutes** les données du site (profil, CV, projets,
  libellés d'interface), en français et en anglais. C'est le seul endroit à
  modifier pour changer un texte.
- `src/app/[locale]/` — les pages : accueil, `/profil`, `/projets`,
  `/projets/[slug]`, `/contact`.
- `src/app/api/contact/route.ts` — l'API d'envoi d'email (Resend).
- `src/components/` — composants partagés (Header, Footer, cartes projet,
  timeline, formulaire de contact, lightbox…).
- `public/images/` — visuels extraits du portfolio Word (voir ci-dessous).
- `scripts/` — scripts d'extraction des images depuis le `.docx` source.

## Régénérer les images depuis le portfolio Word

Les 88 images du fichier `PORTFOLIO_NGO NTONGA Cécile 2026.docx` (à la racine
du dossier parent) ont déjà été extraites et rangées dans `public/images/`.
Si le `.docx` change, on peut relancer l'extraction :

```bash
npm run extract-assets
```

Cela (1) extrait toutes les images du `.docx` et les convertit en WebP dans
`.staging/` (non versionné), puis (2) les range dans `public/images/` selon
le mapping défini dans `scripts/organize-assets.mjs`. Après toute mise à
jour du fichier source, vérifier visuellement le rangement (portraits,
logos, galeries par marque) avant de committer.

## Formulaire de contact (Resend)

Copier `.env.example` vers `.env.local` et renseigner :

```
RESEND_API_KEY=...
RESEND_FROM="Portfolio <onboarding@resend.dev>"
CONTACT_TO_EMAIL=cecilentonga13@gmail.com
```

⚠️ Tant qu'aucun domaine n'est vérifié sur Resend, l'expéditeur
`onboarding@resend.dev` ne peut livrer qu'à l'adresse du **titulaire du
compte Resend**. Créer le compte Resend avec `cecilentonga13@gmail.com`, ou
vérifier un domaine, pour recevoir les messages du formulaire à cette
adresse.

## Build & déploiement

```bash
npm run build
npm run start
```

Le site est 100% statique à l'exception de `/api/contact` (route serveur) —
déployable sur Vercel, ou tout hébergeur supportant Next.js App Router.
