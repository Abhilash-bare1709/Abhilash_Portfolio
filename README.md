# Abhilash Bare — Angular Portfolio

A production-grade, single-page portfolio built with **Angular 17 Standalone Components**, SCSS, and modern animations.

---

## 🗂️ Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           ← Auto GitHub Pages deploy
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          ← Sticky nav with active scroll detection
│   │   │   ├── hero/            ← Intro section with photo + resume download
│   │   │   ├── skills/          ← Skill categories grid
│   │   │   ├── experience/      ← Timeline with org photos
│   │   │   ├── projects/        ← Featured projects grid
│   │   │   ├── certificates/    ← Certifications list
│   │   │   ├── reviews/         ← Colleague testimonials
│   │   │   ├── contact/         ← Contact form with validation
│   │   │   └── footer/          ← Footer with links
│   │   ├── directives/
│   │   │   └── reveal.directive.ts   ← Scroll reveal animation
│   │   ├── models/
│   │   │   └── portfolio.models.ts   ← Shared data interfaces
│   │   ├── services/
│   │   │   └── scroll.service.ts     ← Smooth scroll helper
│   │   ├── app.component.ts
│   │   └── app.config.ts
│   ├── assets/
│   │   ├── resume/
│   │   │   └── Abhilash_Bare_Resume.pdf   ← 🔁 Drop your resume here
│   │   └── images/
│   │       └── profile.jpg              ← 🔁 Drop your photo here
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── netlify.toml
└── tsconfig.json
```

---

## 🛠️ Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18 or 20 | https://nodejs.org |
| Angular CLI | 17+ | `npm install -g @angular/cli` |

---

## ▶️ Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
ng serve

# 3. Open browser
# → http://localhost:4200
```

---

## 🏗️ Build for Production

```bash
ng build --configuration production
# Output: dist/abhilash-portfolio/browser/
```

---

## 🔧 Personalisation Checklist

Before deploying, update these files:

### 1. Add Your Resume
```
src/assets/resume/Abhilash_Bare_Resume.pdf
```

### 2. Add Your Profile Photo
```
src/assets/images/profile.jpg
```
Then open `src/app/components/hero/hero.component.ts` and set:
```ts
hasPhoto = true;
```

### 3. Add Your Social Links
In `hero.component.ts` and `footer.component.ts`:
```ts
facebookUrl  = 'https://facebook.com/YOUR_PROFILE';
instagramUrl = 'https://instagram.com/YOUR_HANDLE';
```

### 4. Add Real Colleague Reviews
Edit `src/app/components/reviews/reviews.component.ts` — replace the 3 placeholder reviews.

### 5. Add Organization Photos
Edit `src/app/components/experience/experience.component.ts`.
For each experience's `photos` array, set the `src` field:
```ts
photos: [
  { label: 'Office Photo', src: 'assets/images/gallop-office.jpg' }
]
```

### 6. Enable Real Contact Form Emails (Free)
1. Go to https://formspree.io → sign up → create a form → copy the ID
2. Open `src/app/components/contact/contact.component.ts`
3. Replace:
```ts
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
```
with your actual ID, e.g.:
```ts
const FORMSPREE_ID = 'xpwzjkqb';
```

---

## 🚀 Deploy — GitHub Pages (Free, Auto-Deploy)

### One-time setup:
```bash
# 1. Create a GitHub account at github.com
# 2. Create a new repository named: portfolio

# 3. Push your code
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 4. Go to GitHub → your repo → Settings → Pages
#    Source: GitHub Actions
#    The .github/workflows/deploy.yml auto-builds and deploys on every push!
```

Your site will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 🌐 Deploy — Netlify (Easiest, Free)

### Option A: Drag & Drop
```bash
ng build --configuration production
# Drag dist/abhilash-portfolio/browser/ to netlify.com/drop
```

### Option B: Connect GitHub (auto-deploy on push)
1. Go to https://netlify.com → New site from Git
2. Connect your GitHub repo
3. Build command: `ng build --configuration production`
4. Publish directory: `dist/abhilash-portfolio/browser`
5. Click Deploy!

Your site: `https://YOUR-SITE.netlify.app`

---

## 🌐 Free Custom Domain

| Provider | Free Domains | Link |
|----------|-------------|------|
| Freenom  | `.tk` `.ml` `.ga` `.cf` | freenom.com |
| js.org   | `yourname.js.org` | js.org |
| GitHub Pages default | `username.github.io` | Built-in |

---

## 🧩 Tech Stack

- **Framework**: Angular 17 (Standalone Components)
- **Styling**: SCSS with CSS Custom Properties
- **Fonts**: Syne, Outfit, Space Mono (Google Fonts)
- **Icons**: Font Awesome 6
- **Deploy**: GitHub Pages / Netlify
- **CI/CD**: GitHub Actions
