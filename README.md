# Grandma's Love, Inc. — Website

A modern, fast, fully responsive website for **Grandma's Love, Inc.**, a Brooklyn
501(c)(3) nonprofit fighting childhood hunger and promoting literacy across
underserved New York City communities.

This is a ground-up redesign of the organization's original Wix site, rebuilt
as a statically-exported Next.js app that runs **completely independently** of
the original website and CDN.

> _Nourishing Bodies, Feeding Minds._

---

## 🛠 Tech stack

- **Next.js 15** (App Router) — statically exported (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **next/font** — Fraunces (display) + Inter (body), self-hosted
- **sharp** — build-time media optimization pipeline
- No runtime backend; all content is a typed local data layer.

## 📂 Project structure

```
src/
  app/                      App Router routes
    page.tsx                Home
    about/ programs/        Top-level pages
    get-involved/ donate/
    contact/ events/ blog/
    events/[slug]/          Static event detail pages
    blog/[slug]/            Static blog post pages
    privacy/ terms/         Policy pages
    sitemap.ts robots.ts    SEO (static)
    layout.tsx globals.css  Shell + design tokens
  content/                  ★ Typed content layer (single source of truth)
    site.ts programs.ts events.ts posts.ts donate.ts
    get-involved.ts about.ts types.ts index.ts
    generated/blur.json     Auto-generated blur placeholders
  lib/
    components/             Navbar, Footer, cards, primitives, ContactForm…
    icons.tsx               Cohesive inline SVG icon set
    image.ts format.ts cn.ts
scripts/
  optimize-media.mjs        Downloaded media → optimized /public/images
public/images/              Local, web-optimized assets (WebP/PNG)
raw messy data/             Original scraped source material (input only)
.media-src/                 Original downloaded media (git-ignored, input only)
```

## 🎨 Design system

A warm, editorial brand: **raspberry** (pulled from the logo) on **warm ivory
paper**, with **pine green** (nourishment) and **honey gold** accents. Design
tokens live in `src/app/globals.css` under `@theme`. Headings use Fraunces;
body uses Inter. Scroll reveals and count-ups respect `prefers-reduced-motion`.

## 🗂 Content layer

All copy, programs, events, posts, and contact details are extracted from the
organization's real material and stored as typed objects in `src/content/`.
Pages are fully data-driven — update a `.ts` file and every page reflects it.
No factual business data is invented.

## 🖼 Media pipeline

`scripts/optimize-media.mjs` reads the original assets (downloaded from the
legacy CDN into `.media-src/`), resizes + re-encodes them to WebP/PNG in
`public/images/`, and generates tiny base64 blur placeholders. The result:
~40 MB of originals → ~1.8 MB of optimized assets, with **zero** external media
dependencies.

```bash
npm run media   # regenerate optimized images + blur placeholders
```

## 🧑‍💻 Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

Serve the production export locally:

```bash
npx serve out
```

## ♿ Accessibility & SEO

- Semantic HTML, skip-to-content link, visible focus states, `aria` labels.
- Reduced-motion support for all animations.
- Per-page metadata, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`,
  and NGO JSON-LD structured data.

---

Website made by [@VoltaNYC](https://nyc.voltanpo.org).
