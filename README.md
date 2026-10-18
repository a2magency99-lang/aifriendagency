# AI Friend Agency — website

Static, framework-free, Arabic-first (RTL) one-page site. No build step.

## Edit the contact details (one place)
Open `script.js` — the `CONFIG` block at the top:

```js
const CONFIG = {
  WHATSAPP_NUMBER: "201552759343",          // digits only, international format
  CONTACT_EMAIL:   "hello@aifriendagency.com" // placeholder
};
```
Every WhatsApp button (with its pre-filled message) and the footer email update from there.
The HTML also carries the same number as a no-JavaScript fallback; search `wa.me/` in `index.html` if you want the fallback changed too.

## Domain
`index.html` uses `https://aifriendagency.sites.tab.bot/` as the canonical URL and for the
Open Graph image (`og.png`) and JSON-LD. When the site moves to its own domain, replace that
address in `index.html` (search for `sites.tab.bot`).

## Deploy on GitHub Pages
Push the contents of this folder to the root of a GitHub repo (keep `.nojekyll`), then
Settings → Pages → "Deploy from a branch" → `main` / `(root)`. No build step; all asset paths are relative,
so it works both at `https://USER.github.io/REPO/` and on a custom domain.
When you know the final address, replace `https://aifriendagency.sites.tab.bot/` in `index.html`
(canonical, Open Graph and JSON-LD) with it.

## Structure
- `index.html` — all content (hero, services, packages, how we work, portfolio, why us, FAQ, CTA, footer) + SEO meta + schema.org JSON-LD (ProfessionalService, FAQPage)
- `styles.css` — design (Cairo font, self-hosted in `assets/fonts/`)
- `script.js` — config + small enhancements
- `assets/img/` — logo (SVG), demo thumbnails (WebP)
- `demos/<niche>/` — demo sites by niche, linked from the "نماذج مواقع حسب نشاطك" section
- `og.png` — 1200×630 share card; `favicon.svg`, `apple-touch-icon.png`
- `404.html` — not-found page; `.nojekyll` — tells GitHub Pages to serve files as-is
