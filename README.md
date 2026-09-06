# croodit-website

Marketing site for **[croodit.com](https://croodit.com)** — the WhatsApp invoicing and UPI
payment-tracking app for Indian trainers, coaches and creators.

Built from the `Croodit Landing` design (MAR-388). Astro, static output, no client-side JS.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Where things live

| Path | What |
| --- | --- |
| `src/pages/index.astro` | The landing page. Sections: hero, problem, how it works, nudge, who it's for, FAQ, final CTA. |
| `src/pages/llms.txt.ts` | `/llms.txt`, generated at build time from `src/data/`. Never edit the output by hand. |
| `src/data/faq.ts` | FAQ copy. Feeds the on-page accordion, `FAQPage` schema **and** `/llms.txt` — one edit, three surfaces. |
| `src/data/facts.ts` | The claim sheet: positioning, price, what Croodit is and isn't. Everything AI-facing is generated from here. |
| `src/site.ts` | Site-wide facts — URL, email, store links, price. Flip `appStoreUrl` when the app ships and every CTA updates. |
| `src/layouts/Base.astro` | `<head>`, SEO/OG tags, canonical, JSON-LD, nav, footer. |
| `src/components/Screen*.astro` | The in-phone app mockups. Decorative; they mirror the app design 1:1. |
| `src/styles/global.css` | Design tokens and every class. No CSS-in-component. |
| `public/brand/` | Wordmark and app-icon SVGs. |
| `scripts/og.mjs` | Regenerates `public/og.png`. Needs Bricolage Grotesque as a system font; output is committed so CI doesn't. |

## Rules that matter

- **Claims must be true.** Prices, the free-client limit and feature claims live in `src/site.ts` and
  `src/data/facts.ts`. Change them there, never inline in a page, and never state something the product
  doesn't do.
- **Croodit never messages a client by itself.** This is the product's core promise. Don't write copy that
  implies automated sending.
- **No trailing slashes.** `trailingSlash: 'never'` in `astro.config.mjs`; canonical URLs and the sitemap follow.
- **New page checklist:** wrap in `Base`, pass `title` + `description` + `path`, add relevant JSON-LD via
  `schema`, and add it to `pages` in `src/data/facts.ts` so `/llms.txt` lists it.

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages → served at
`croodit.com` (apex A records point at GitHub Pages; DNS is managed in Cloudflare, proxy off so
GitHub can issue the certificate). `public/CNAME` holds the custom domain.
