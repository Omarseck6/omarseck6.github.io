# Déploiement du portfolio — GitHub Pages & CI/CD

Ce document explique comment le portfolio est construit, testé et publié, et quoi faire **une fois le problème de facturation GitHub résolu**.

- Site : <https://omarseck6.github.io/>
- Dépôt : <https://github.com/Omarseck6/omarseck6.github.io> (public, branche `main`)
- Stack : Next.js 16 (App Router) en **export statique**, sans serveur, hébergé sur GitHub Pages.

---

## 1. Architecture

```text
Branche de travail ──▶ Pull Request ──▶ ci.yml (lint + build, aucun déploiement)
                                            │  merge
                                            ▼
                        main ──push──▶ deploy.yml (GitHub Actions)
                                         npm ci → lint → next build
                                            │
                                            ▼
                                  out/  (export statique)
                                            │
                       upload-pages-artifact → deploy-pages
                                            ▼
                              https://omarseck6.github.io/
```

| Fichier | Rôle |
|---|---|
| `next.config.ts` | `output: "export"` (génère `out/`), `trailingSlash: true` (URLs `/projects/x/`), `images.unoptimized: true` (pas de serveur d'optimisation sur Pages) |
| `.github/workflows/deploy.yml` | Build + déploiement à chaque push sur `main`, ou à la main depuis l'onglet Actions |
| `.github/workflows/ci.yml` | Lint + build sur chaque Pull Request vers `main`, sans déployer |
| `.nvmrc` | Version de Node utilisée en CI (24, LTS) |
| `src/lib/site.ts` | URL publique du site (canonical, Open Graph, sitemap, robots) |
| `src/data/portfolio.ts` | Tout le contenu : profil, CV, expériences, projets, compétences, endpoint du formulaire |

Les deux workflows utilisent les actions officielles : `actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5`, `actions/deploy-pages@v5`.

---

## 2. Premier déploiement (après résolution de la facturation)

### 2.1 Vérifier le compte

1. Ouvre <https://github.com/settings/billing>.
2. Vérifie que plus aucun avertissement de compte verrouillé (« account locked ») ni de paiement en échec n'est affiché.

> Tant que le compte est verrouillé, **aucun workflow GitHub Actions ne démarre**, même sur un dépôt public. Le job échoue alors en quelques secondes avec : *« The job was not started because your account is locked due to a billing issue »*.

### 2.2 Vérifier la source GitHub Pages

1. Dans le dépôt : **Settings → Pages → Build and deployment → Source**.
2. Choisis **GitHub Actions**. Ne choisis pas « Deploy from a branch ».

Signe que ce réglage n'est pas actif : après un push, l'onglet Actions affiche un run nommé **« pages build and deployment »**, et le site montre le `README.md` rendu par Jekyll au lieu du portfolio.

### 2.3 Lancer le déploiement

Choisis l'une de ces méthodes :

- **Relancer le run qui a échoué :** onglet **Actions → Deploy to GitHub Pages**, ouvre le dernier run, puis **Re-run jobs → Re-run all jobs**.
- **Lancer un nouveau run :** onglet **Actions → Deploy to GitHub Pages → Run workflow** (branche `main`).
- **Depuis ton ordinateur :**
  ```bash
  git commit --allow-empty -m "chore: trigger deployment"
  ```
  ```bash
  git push origin main
  ```

### 2.4 Suivre et vérifier

1. Onglet **Actions → le run en cours**. Il contient deux jobs :
   - `build` : checkout, Node, `npm ci`, lint, build, upload ;
   - `deploy` : publication. Son URL s'affiche dans le résumé du run.
2. Une fois le run vert (1 à 3 min), ouvre <https://omarseck6.github.io/> et vérifie :
   - [ ] la page d'accueil, les images et les polices ;
   - [ ] une page projet, par exemple `/projects/bokk-dem/`, ouverte directement dans l'URL ;
   - [ ] le bouton **Download CV**, qui propose FR ou EN puis ouvre le PDF ;
   - [ ] le formulaire de contact : envoie un message test, puis confirme le formulaire dans l'e-mail Formspree si on te le demande ;
   - [ ] `/robots.txt`, `/sitemap.xml` et `/opengraph-image.png` ;
   - [ ] le cadenas HTTPS, automatique sur `*.github.io`.
3. Optionnel : teste l'aperçu de partage avec le [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

> GitHub Pages met les fichiers en cache environ 10 minutes. Si l'ancienne version s'affiche, recharge avec `Ctrl+F5` ou attends quelques minutes.

---

## 3. Travailler au quotidien

### 3.1 Modification simple (directement sur `main`)

```bash
npm run lint
```
```bash
npm run build
```
```bash
git add -A
```
```bash
git commit -m "feat: ..."
```
```bash
git push origin main
```

Le push déclenche `deploy.yml`. **Si le lint ou le build échoue, rien n'est publié** et la version précédente reste en ligne.

### 3.2 Modification importante (recommandé : via Pull Request)

```bash
git switch -c feat/ma-modification
```
```bash
git push -u origin feat/ma-modification
```

1. Ouvre une Pull Request vers `main` sur GitHub.
2. Le workflow **CI** lance lint et build. Le check doit être vert.
3. Merge la PR. Le push sur `main` déclenche le déploiement.

### 3.3 Protéger `main` (recommandé)

**Settings → Rules → Rulesets → New ruleset → New branch ruleset**, puis :

- **Target branches** : `main` (Include default branch) ;
- coche **Require a pull request before merging** ;
- coche **Require status checks to pass**, puis ajoute le check **`build`** du workflow CI. Il apparaît après la première PR.

Ensuite, aucune modification cassée ne peut atteindre `main`, donc la production.

---

## 4. Tester en local avant de publier

```bash
npm ci
```
```bash
npm run lint
```
```bash
npm run build
```
```bash
python -m http.server 4173 --directory out
```

Puis ouvre <http://localhost:4173/>. Dans les DevTools, onglet Network, aucune ressource ne doit renvoyer 404.

- `npm run dev` reste disponible pour développer, avec rechargement à chaud.
- **Sous Windows uniquement :** une requête de prefetch `__next.projects.$d$slug.__PAGE__.txt` renvoie 404 en local. C'est un bug de Next.js sous Windows : il écrit le nom de fichier avec `\`. Il ne touche pas le build Linux de GitHub Actions et n'a aucun effet visible.

---

## 5. Mettre à jour le contenu

| Je veux… | Où |
|---|---|
| Modifier expériences, projets, compétences, services, profil | `src/data/portfolio.ts` |
| Remplacer un CV | `public/cv/omar-seck-cv-fr.pdf` et `public/cv/omar-seck-cv-en.pdf` (garder les mêmes noms) |
| Ajouter une capture à un projet (ex. Bokk Dem) | Image dans `public/images/`, puis `image: "/images/xxx.webp"` dans le projet |
| Changer l'image de partage social | Remplacer `src/app/opengraph-image.png` (1200 × 630 px) |
| Changer l'endpoint du formulaire | `contactFormEndpoint` dans `src/data/portfolio.ts` |

**Convertir une image en WebP** (léger, sans perte visible) :

```bash
node -e "require('sharp')('public/images/ma-capture.png').webp({quality:80}).toFile('public/images/ma-capture.webp').then(i=>console.log(i))"
```

Supprime ensuite le `.png` d'origine s'il n'est plus utilisé : tout fichier présent dans `public/` est publié.

---

## 6. Variables de configuration (optionnelles)

**Settings → Secrets and variables → Actions → onglet Variables**

| Variable | Utilité | Valeur par défaut |
|---|---|---|
| `SITE_URL` | URL publique (canonical, sitemap, Open Graph) | `https://omarseck6.github.io` |
| `CONTACT_FORM_ENDPOINT` | Remplace l'endpoint Formspree du code | `https://formspree.io/f/xdeajwjw` |
| `GA_ID` | Active Google Analytics (`G-XXXXXXX`) | désactivé |

Ce sont des **valeurs publiques** : elles sont intégrées dans le JavaScript du site.
- **Ne mets jamais de secret** (clé API privée, token, mot de passe) dans une variable `NEXT_PUBLIC_*` ni dans le code.
- Si tu actives Google Analytics, prévois un bandeau de consentement (RGPD).

---

## 7. Dépannage

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le job échoue en quelques secondes : *« account is locked due to a billing issue »* | Compte GitHub verrouillé | Régler la facturation (§2.1), puis **Re-run jobs** |
| Le site affiche le README au lieu du portfolio | Source Pages sur « Deploy from a branch » | Settings → Pages → Source : **GitHub Actions** (§2.2) |
| `Setup Pages` échoue (*Get Pages site failed*) | Pages pas activé ou source incorrecte | Même correction que ci-dessus |
| `deploy` échoue avec une erreur de permissions ou d'environnement | Règles de l'environnement `github-pages` | Settings → Environments → `github-pages` : autoriser la branche `main` |
| Étape `Lint` ou `Build` en rouge | Erreur dans le code | Ouvrir l'étape pour lire le log, reproduire avec `npm run lint` / `npm run build` en local, corriger, pousser |
| Image ou PDF en 404 sur le site | Fichier absent de `public/` ou mauvais chemin / casse | Les chemins sont sensibles à la casse sur Pages (Linux) : `/images/Logo.webp` ≠ `/images/logo.webp` |
| Le formulaire n'envoie rien | Formulaire Formspree non confirmé ou domaine non autorisé | Confirmer le formulaire dans Formspree ; vérifier les domaines autorisés (`omarseck6.github.io`) |
| Ancienne version affichée | Cache (≈ 10 min) | `Ctrl+F5` ou attendre |

---

## 8. Maintenance

- **Dépendances :**
  - `npm audit --omit=dev` doit rester à 0 vulnérabilité ;
  - les alertes qui ne touchent que les outils de dev (lint) ne sont pas publiées sur le site ;
  - n'utilise jamais `npm audit fix --force`, qui peut rétrograder Next.js.
- **Mises à jour de Next.js :** fais-les dans une branche avec PR, pour que la CI vérifie le build avant le déploiement.
- **Versions des actions GitHub :** vérifie-les de temps en temps sur la page Releases de chaque action. Dependabot peut le faire automatiquement via un fichier `.github/dependabot.yml`.
- **Runner :** le label `ubuntu-latest` passe à Ubuntu 26 à partir du 19 octobre 2026. Aucun changement n'est attendu pour ce projet.

---

## 9. Domaine personnalisé (plus tard)

1. Vérifie le domaine : **Settings du compte → Pages → Add a domain**. GitHub le recommande contre la prise de contrôle du domaine.
2. Configure les DNS chez ton registrar.
   - Apex (`omarseck.dev`) : 4 enregistrements `A` vers
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

     et, en option, les `AAAA` de `2606:50c0:8000::153` à `2606:50c0:8003::153`.
   - `www` : un `CNAME` vers `omarseck6.github.io`.
   - Configure les deux : GitHub redirige alors de l'un vers l'autre. N'utilise jamais d'enregistrement wildcard (`*`).
3. Dans **Settings → Pages → Custom domain**, saisis le domaine. Avec un workflow Actions, **aucun fichier `CNAME` n'est nécessaire**.
4. Coche **Enforce HTTPS** (jusqu'à 24 h de délai).
5. Mets à jour la variable `SITE_URL` (§6), puis relance le déploiement.

---

## 10. Visibilité du dépôt

Le dépôt doit rester **public** :
- avec le plan **GitHub Free**, GitHub Pages ne fonctionne que sur un dépôt public ;
- rendre le dépôt privé dépublierait le site ;
- un dépôt privé avec Pages nécessite **GitHub Pro**.

Le dépôt ne contient aucun secret. Les informations personnelles présentes (e-mail, téléphone, CV) sont de toute façon publiées sur le site.
