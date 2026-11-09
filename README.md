# Myo Min — Portfolio

A fast, accessible, single-page portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** and **lucide-react**. Fully static, deployable to Vercel in one click.

## Features

- Dark / light theme toggle (follows the system preference by default, no flash on load)
- Sticky navbar with smooth scrolling, active-section highlighting and a mobile menu
- Sections: Hero, About, Skills, Experience timeline, Projects (filters + detail modal), Education, Contact, Footer
- Optional contact form via [Formspree](https://formspree.io) (hidden unless configured)
- SEO: title, meta description, Open Graph / Twitter tags, generated OG image, favicon, `robots.txt`, `sitemap.xml`
- Accessibility: semantic HTML, skip link, keyboard-navigable modal with focus trap, `prefers-reduced-motion` support

## Requirements

- Node.js 18.18+ (20+ recommended)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & run in production

```bash
npm run build
npm start
```

## Editing content

All text lives in **[`data/portfolio.ts`](data/portfolio.ts)** — name, tagline, stats, about, skills, experience, projects, education and contact copy.

For each project you can set:

| Field       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `image`     | Screenshot path under `public/` (e.g. `/projects/ost.png`) or a full URL. Empty → placeholder cover. |
| `liveUrl`   | Live demo link. Empty → button hidden.                                       |
| `githubUrl` | Source code link. Empty → button hidden.                                     |
| `featured`  | `true` shows the project as a large card at the top.                         |
| `categories`| Which filter tabs it appears under: `"Golang"`, `"Laravel"`, `"React & Node"`, `"AI"`. |

### Replace the placeholders

- `public/profile.jpg` — your profile photo (square works best)
- `public/Myo_Min_CV.pdf` — your CV (the current file is a placeholder)

### Change the accent color

The accent is mapped to Tailwind's emerald palette in [`app/globals.css`](app/globals.css). Replace `emerald` with e.g. `indigo` in the `--color-accent-*` variables.

### Default theme

The site follows the visitor's OS theme. To force dark mode for first-time visitors, set `defaultTheme="dark"` in [`components/ThemeProvider.tsx`](components/ThemeProvider.tsx).

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable                   | Purpose                                                          |
| -------------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (e.g. `xyzabcde`). Enables the contact form.    |
| `NEXT_PUBLIC_SITE_URL`     | Production URL for canonical and Open Graph links.               |

Both are read at build time, so rebuild / redeploy after changing them.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository (framework is auto-detected as Next.js).
3. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_FORMSPREE_ID`).
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Project structure

```
app/
  layout.tsx            # fonts, metadata/SEO, theme provider
  page.tsx              # assembles all sections
  globals.css           # Tailwind + accent color tokens
  icon.svg              # favicon
  opengraph-image.tsx   # generated 1200×630 OG image
  robots.ts, sitemap.ts
components/
  Navbar, Hero, About, Skills, Experience, Projects, ProjectModal,
  ProjectCover, Education, Contact, ContactForm, Footer,
  Section, Reveal, SocialLinks, ThemeToggle, ThemeProvider, icons
data/
  portfolio.ts          # ← all site content
public/
  profile.jpg, Myo_Min_CV.pdf
```
