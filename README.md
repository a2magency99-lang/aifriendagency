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
The site is live on GitHub Pages at `https://a2magency99-lang.github.io/aifriendagency/`.
`index.html`, `demos/index.html`, `sitemap.xml` and `robots.txt` use that address for the canonical URL,
Open Graph image and JSON-LD. If you move to a custom domain, replace that address in those four files.

## Deploy on GitHub Pages
Push the contents of this folder to the root of a GitHub repo (keep `.nojekyll`), then
Settings → Pages → "Deploy from a branch" → `main` / `(root)`. No build step; all asset paths are relative,
so it works both at `https://USER.github.io/REPO/` and on a custom domain.


## Structure
- `index.html` — hero, commitments, service catalog (tabs), marketing + ads sections, packages, how we work, demo sites, comparison, FAQ, consultation form (opens WhatsApp prefilled; no backend), footer + SEO meta + JSON-LD (ProfessionalService, FAQPage)
- `demos/index.html` — all demo sites with filter chips; `demos/<niche>/` — each demo
- `sitemap.xml`, `robots.txt`
- `styles.css` — design (Cairo font, self-hosted in `assets/fonts/`)
- `script.js` — config + small enhancements
- `assets/img/` — logo (SVG), demo thumbnails (WebP)
- `demos/<niche>/` — demo sites by niche, linked from the "نماذج مواقع حسب نشاطك" section
- `og.png` — 1200×630 share card; `favicon.svg`, `apple-touch-icon.png`
- `404.html` — not-found page; `.nojekyll` — tells GitHub Pages to serve files as-is
