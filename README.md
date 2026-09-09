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
RESEND_FROM="Cécile Claude - Portfolio <contact@tcecile.online>"
CONTACT_TO_EMAIL=cecilentonga13@gmail.com
```

⚠️ Le domaine `tcecile.online` doit être **vérifié sur Resend**
(resend.com/domains) avant que l'envoi ne fonctionne pour un destinataire
autre que le titulaire du compte Resend. Étapes :

1. Sur [resend.com/domains](https://resend.com/domains), cliquer "Add
   Domain" et saisir `tcecile.online`.
2. Resend affiche des enregistrements DNS (SPF/TXT, DKIM/CNAME, parfois
   MX) à ajouter chez le registrar du domaine.
3. Une fois les enregistrements propagés (quelques minutes à quelques
   heures), cliquer "Verify" dans Resend — le domaine passe en statut
   "Verified".
4. À partir de là, `contact@tcecile.online` (ou toute adresse sur ce
   domaine) peut envoyer vers n'importe quel destinataire, y compris
   `cecilentonga13@gmail.com`.

Tant que le domaine n'est pas vérifié, l'API `/api/contact` répond `500`
(`send_failed`) pour tout destinataire différent du titulaire du compte
Resend.

## Build & déploiement

```bash
npm run build
npm run start
```

Le site est 100% statique à l'exception de `/api/contact` (route serveur) —
déployable sur Vercel, ou tout hébergeur supportant Next.js App Router.
