# Vitalii Prokopchuk — Personal Portfolio

Personal portfolio site for Vitalii Prokopchuk, built with Astro and Tailwind CSS, deployed to GitHub Pages at [prvit.github.io](https://prvit.github.io).

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS
- Vanilla JS — minimal interactivity (experience card toggles, nav scroll)
- Inter + JetBrains Mono — via `@fontsource`

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions on every push to `main`.

### First-time setup

1. Push this repository to GitHub as `prvit/prvit.github.io` (or any repo under the `prvit` account).
2. Go to **Settings > Pages** in the repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a commit to `main` — the workflow at `.github/workflows/deploy.yml` will build and deploy automatically.
5. The site will be live at `https://prvit.github.io` within a few minutes.

### CV file

Replace `public/cv.pdf` with the real CV PDF before deploying. The file is linked from the hero, the nav bar, and the contact section.

### OG image

Add a `public/og-image.png` (recommended: 1200x630px) for social sharing previews. The meta tags already reference `/og-image.png`.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── cv.pdf                  # CV download (replace with real file)
│   ├── favicon.svg
│   └── og-image.png            # Add before deploying
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── EducationCerts.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Base.astro          # HTML shell, SEO, JSON-LD
│   ├── pages/
│   │   └── index.astro         # Single-page layout
│   └── styles/
│       └── global.css          # CSS custom properties, global styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Customization

All content is co-located with each component — no CMS or external data source. To update content, edit the relevant component in `src/components/`.

- Experience items: `src/components/Experience.astro`
- Projects: `src/components/Projects.astro`
- Skills: `src/components/Skills.astro`
- Education & certifications: `src/components/EducationCerts.astro`
- Colors & typography: `src/styles/global.css`
