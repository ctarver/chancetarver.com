# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & dev commands

- `npm run dev` — dev server with HMR at http://localhost:4321.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run check` — runs `astro check` (TypeScript + content-collection schema validation).
- `npm run migrate` — one-shot re-import of publications from the legacy Hugo tree. **Only useful if you check out the `legacy-hugo` branch into a sibling directory first.** Safe to re-run but overwrites the `featured: true` flags on previously edited publications.

Node 20+ required.

## Architecture

**Astro 5 static site, deployed to Cloudflare Pages.** Tailwind v4 (via `@tailwindcss/vite`, not the legacy integration). MDX + RSS + sitemap + astro-icon (Iconify for `lucide` + `simple-icons`). No React/Vue islands at present — Astro components only.

The original Hugo/Wowchemy build of this site lives on the **`legacy-hugo`** branch of this repo for reference. `main` is the live Astro site.

### Where to make changes

| Want to change… | Edit… |
|---|---|
| Name, role, tagline, social links, nav, experience timeline | `src/site.config.ts` — single source of truth, consumed by Hero / Nav / Footer / SEO / About |
| Publication field shape | `src/content.config.ts` (Zod). Changes here may invalidate existing files until edited |
| A publication / project / post | `src/content/{publications,projects,posts}/<slug>.md` |
| Mark a pub as featured (homepage) | Set `featured: true` in its frontmatter |
| Project order on `/projects` | `order:` field (ascending) |
| Color palette, fonts, typography | `src/styles/global.css` (`@theme` block + `prose-custom` rules) |
| Page-level layout/nav | `src/layouts/Base.astro`, `src/components/Nav.astro`, `src/components/Footer.astro` |
| Old-URL → new-URL redirects | `public/_redirects` (Cloudflare Pages syntax) |
| OG card | `public/og-default.svg` (replace with a PNG before broader launch for max scraper compat) |

### Content collections

Defined in `src/content.config.ts` using Astro's `glob` loader. **Frontmatter is type-checked at build time**; a missing or mistyped field fails the build with a clear error pointing at the file. The dynamic routes `src/pages/{publications,projects,posts}/[...slug].astro` enumerate the collection via `getStaticPaths`.

Publication types in use: `journal`, `conference`, `patent`, `thesis`, `workshop`, `book-chapter`, `preprint`, `article` (e.g. industry blog posts), `talk` (video talks with embedded YouTube via the optional `youtube` frontmatter field).

### Styling conventions

- All colors flow from the CSS variables in `src/styles/global.css` `@theme`. Components reference them via `text-[var(--color-fg)]` etc. — do not hardcode hex values in components.
- Dark mode is class-based (`.dark` on `<html>`), bootstrapped by the inline script in `Base.astro` before paint to prevent flash. `ThemeToggle.astro` flips it and persists to `localStorage`.
- `@apply` cannot reference custom component classes in Tailwind v4. Inline the rules instead. (Found this the hard way when defining `.link`.)
- Em dashes are banned site-wide; date ranges use en dash with no spaces (`2014–2022`), separators use middle dot (`Title · Site`). Don't reintroduce em dashes — they read as AI-generated.
- "Quiet" inline links (subtle, only show on hover) use `.link-quiet`. Standard underlined links use `.link`.

### Publication editing tips

- Linking a YouTube video to a publication: add `youtube: 'https://www.youtube.com/watch?v=...'` to the frontmatter. The detail page renders an embedded player automatically.
- The home page's "Selected Publications" section is the union of `featured: true` pubs plus the most recent few, capped at 8 total, sorted by date.

## Deployment

Cloudflare Pages, connected to this repo:
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output: `dist`
- Node: `NODE_VERSION=22` (or `20`; the lock floor is 20.3)

Pushes to `main` deploy to prod; PR branches get preview URLs automatically. `public/_redirects` is read natively by CF Pages — no extra config.

The custom contact alias `hello@chancetarver.com` is served by **Cloudflare Email Routing** (zone settings → Email → Routes), forwarding to a private inbox. The real personal email is intentionally not published on the site.
