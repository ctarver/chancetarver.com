# chancetarver.com

Personal site for **Chance Tarver** — Senior Staff Research Engineer at Samsung Research America. Built with [Astro 5](https://astro.build), [Tailwind v4](https://tailwindcss.com), and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Quick start

```bash
npm install
npm run dev         # http://localhost:4321
npm run build       # → dist/
npm run preview     # serve dist/ locally
npm run check       # astro check (types + content schemas)
```

Node 20+.

## Editing content

| What | Where |
|---|---|
| Bio, tagline, role, social, experience, nav | `src/site.config.ts` |
| A publication | `src/content/publications/<slug>.md` |
| A project | `src/content/projects/<slug>.md` |
| A blog post | `src/content/posts/<slug>.md` (or `.mdx`) |
| Theme colors, fonts | `src/styles/global.css` (`@theme` block) |
| CV PDF | replace `public/cv.pdf` |
| Favicon | `public/favicon.svg` |
| OG card | `public/og-default.svg` (swap for a PNG before launch for max scraper support) |
| Old-URL redirects | `public/_redirects` |

Frontmatter schemas live in `src/content.config.ts`. The build fails fast on a missing or mistyped field — useful, not annoying.

### Publication frontmatter (minimum)

```yaml
---
title: 'Paper title here'
authors:
  - 'Chance Tarver'
  - 'Co-author Name'
venue: 'IEEE Trans. Signal Processing'
type: journal     # or conference | patent | thesis | preprint | book-chapter | workshop
year: 2026
date: 2026-03-15
doi: '10.1109/...'         # optional
pdf: 'https://...'         # optional (must be full URL)
arxiv: 'https://arxiv.org/...'  # optional
code: 'https://github.com/...'  # optional
bibtex: |
  @article{tarver2026,
   ...
  }
featured: true    # surfaces on homepage
tags: ['DPD', 'MIMO']
---

Optional markdown body — shown on the publication detail page.
```

## Deploying to Cloudflare Pages (one-time)

1. Push this repo to GitHub (or GitLab).
2. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** → pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION=22`
4. **Custom domain:** Add `chancetarver.com` in the Pages project settings. Cloudflare will give you DNS instructions. If the domain isn't already on Cloudflare DNS, move the zone there first (free) — apex domains on Pages need it.
5. **Web Analytics (optional, recommended):** Cloudflare dashboard → Web Analytics → enable for the Pages project. Zero code change; privacy-friendly; no cookie banner needed.

Every push to `main` → production deploy. Every PR → unique preview URL.

## Re-running the Hugo migration

`npm run migrate` re-imports publications from `../chancetarver.com.legacy-hugo/content/publication/`. It is **destructive** — it overwrites the files in `src/content/publications/`, including any hand-edits like `featured: true`. Use it once at the start; after that, edit the markdown files directly.

## Pre-launch checklist

- [ ] Replace `public/cv.pdf` with the current CV.
- [ ] Swap `public/og-default.svg` for an `og-default.png` (1200×630) and update the default in `src/components/SEO.astro`.
- [ ] Drop a real headshot at `public/headshot.jpg` (square, ≥600×600) and flip `USE_PHOTO = true` in `src/components/Headshot.astro`. Until then, the hero shows a "CT" initials avatar.
- [ ] **Set up Cloudflare Email Routing** for the burner alias used as the published contact. Cloudflare dashboard → your zone → Email → Email Routing → Routes → create `hello@chancetarver.com` → forward to your private inbox. Without this, mail sent to `hello@chancetarver.com` will bounce. The alias name is configured in `src/site.config.ts`.
- [ ] Fill in `site.social.orcid` in `src/site.config.ts` if you have an ORCID iD.
- [ ] Spot-check a few publications for accurate DOI / arXiv links (some legacy entries had placeholder DOIs that were dropped during import).
- [ ] Submit `sitemap.xml` (built to `dist/sitemap-index.xml`) to Google Search Console after launch.
- [ ] Verify the `_redirects` work on the Pages preview URL (e.g., `/publication/foo` → `/publications/foo`).

## License

Content (text, images): © Chance Tarver. Code: feel free to borrow.
