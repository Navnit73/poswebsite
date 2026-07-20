# Formulary — Pharmacy Inventory & POS marketing site

Plain HTML + Tailwind CSS v4 (real CLI build, not the CDN version). Header and
footer are single shared partials (`pages/header.html`, `pages/footor.html`)
injected into every page by `js/app.js`, so you edit the nav or footer once.

## Run it locally
Partials load via `fetch()`, which browsers block on `file://` — you need a
tiny local server:

```bash
npm install
npm run serve      # serves the site at http://localhost:5500
```

Open `http://localhost:5500/index.html`.

## Editing styles
Tailwind classes are scanned from your HTML automatically. After changing
colors/fonts in `css/input.css` (the `@theme` block) or adding new classes in
HTML, rebuild:

```bash
npm run build:css      # one-off build
npm run watch:css      # rebuilds on every save while you work
```

Don't hand-edit `css/output.css` — it's generated.

## Before you publish — replace these placeholders
- **Domain**: `https://www.formulary.app/` appears in canonical tags, Open
  Graph tags and every JSON-LD block across all pages. Swap it for your real
  domain everywhere (`grep -rn "formulary.app" .` finds every instance).
- **Brand name**: "Formulary" is a placeholder name (it's the real pharmacy
  term for an approved-drug list) — rename it if you have your own brand.
- **Contact details**: email, phone, and the "Store Manager, Pune" quote in
  the testimonial section on `index.html` are all placeholders.
- **`og:image`**: points to `/images/og-cover.png`, which doesn't exist yet —
  add a 1200×630 image at that path (used when the site is shared on social).
- **Prices**: $149 / $199 on the homepage and `pages/pricing.html`, plus the
  matching numbers in the `Offer` / `AggregateOffer` JSON-LD, are placeholder
  figures — set your real plan prices in both the visible cards and the
  schema so they stay in sync.

## What's built so far
- `index.html` — homepage (hero, stats, feature highlights, pricing teaser, FAQ)
- `pages/features.html` — full module-by-module feature breakdown
- `pages/pricing.html` — plan cards, monthly/annual toggle, comparison table, FAQ
- `pages/header.html`, `pages/footor.html` — shared nav/footer partials
- `js/app.js` — partial loader, mobile nav, count-up stats, scroll reveal, FAQ accordion, pricing toggle

Schema included per page: `Organization`, `WebSite`, `SoftwareApplication`,
`Product`/`AggregateOffer`, `FAQPage`, `BreadcrumbList`, `ItemList` — matched
to what's actually visible on that page (Google penalizes JSON-LD that
doesn't match on-page content).

## Not built yet
The other pages already in your file tree — `aboutUs`, `blog`, `casestudy`,
`contact`, `dashboard`, `demo`, `inventory`, `privacy`, `refundPolicy`,
`sales`, `tmc` — are still empty. Same design system, so say the word and
I'll keep going page by page.