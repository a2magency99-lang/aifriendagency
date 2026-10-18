# AI Friend Agency — website

Static, framework-free, Arabic-first (RTL) one-page site. No build step.

## Edit the contact details (one place)
Open `script.js` — the `CONFIG` block at the top:

```js
const CONFIG = {
  WHATSAPP_NUMBER: "201552759343",          // digits only, international format
  CONTACT_EMAIL:   "aifriend411@gmail.com" // placeholder
};
```
Every WhatsApp button (with its pre-filled message) and the footer email update from there.
The HTML also carries the same number as a no-JavaScript fallback; search `wa.me/` in `index.html` if you want the fallback changed too.

## Domain
The site is live on GitHub Pages at `https://a2magency99-lang.github.io/aifriendagency/`.
`index.html`, `demos/index.html`, every `demos/<niche>/index.html`, `404.html`, `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt` use that address for the canonical URL,
Open Graph image and JSON-LD. If you move to a custom domain, replace that address in those files (search for `a2magency99-lang.github.io/aifriendagency/`).

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

## SEO / AEO / GEO (Oct 18, 2026)
- Google Search Console verification meta tag sits right after `<meta charset>` in `index.html` — keep it.
- `index.html`: keyword title/description, canonical + hreflang (ar, x-default), OG/Twitter, answer-first "ما هي AI Friend Agency؟" section (`#about`), 12-question FAQ; JSON-LD: ProfessionalService (contact point, areas served, languages, service types), WebSite, WebPage, FAQPage (mirrors the visible FAQ — update both together), Service entries per category.
- `demos/index.html`: CollectionPage + BreadcrumbList + ItemList of CreativeWork samples.
- Each `demos/<niche>/index.html`: unique title/description marked as a sample, canonical, OG/Twitter with its own 1200×630 card (`assets/img/og/<niche>.jpg`), CreativeWork + BreadcrumbList JSON-LD, image width/height + lazy-loading.
- `llms.txt` / `llms-full.txt`: plain-text summary for AI assistants. `robots.txt` allows all crawlers incl. AI bots. `sitemap.xml` lists all 22 pages with images.

## Blog (Oct 18, 2026)
- `blog/index.html` — blog listing (Blog + ItemList + BreadcrumbList JSON-LD); `blog/<slug>/index.html` — one page per article (BlogPosting + BreadcrumbList + FAQPage JSON-LD, table of contents, visible FAQ that mirrors the FAQPage schema — update both together).
- Share cards: `assets/img/og/blog.jpg` and `assets/img/og/blog-<slug>.jpg` (1200×630, rendered from HTML with the Cairo font).
- "المدونة" link sits in the header nav and footer of `index.html`, `demos/index.html` and every blog page; the homepage has a small "أحدث المقالات" section (`#blog`) linking 3 articles.
- New articles: copy an article folder, change the slug, title (<60 chars), description (~150 chars), canonical/OG URLs and JSON-LD, then add the URL to `sitemap.xml`, `llms.txt`, `llms-full.txt` and the cards on `blog/index.html`.
- Blog styles are at the end of `styles.css` under `/* ===== blog`.
- Batch 2 (Oct 18, 2026): 10 more articles (salla-store-design, zid-store-design, shopify-saudi-arabia, landing-page-guide, tiktok-ads-online-stores, social-media-management-stores, product-description-writing, product-photography-phone, shipping-companies-online-stores, payment-gateways-saudi); the blog now has 20. The homepage "أحدث المقالات" shows 3 of the new ones.
