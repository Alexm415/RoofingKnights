# Roofing Knights

A multi-page marketing site for Roofing Knights, a residential roofing contractor in Los Angeles. Built with React, Vite, and plain CSS.

This repository is private. Do not make it public or deploy it until Alexander says to.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173/RoofingKnights/).

The dev server and production build default to the GitHub Pages project path `/RoofingKnights/`. To serve from the site root (a custom domain, or a local preview):

```bash
VITE_BASE=/ npm run dev
VITE_BASE=/ npm run build
VITE_BASE=/ npm run preview
```

Routing uses `HashRouter`, so paths look like `/#/services`. A `404.html` copy of `index.html` is also written at build time as a GitHub Pages fallback.

## Editing content

Almost every business fact lives in [`src/siteConfig.js`](src/siteConfig.js). English and Spanish UI copy lives in [`src/copy.js`](src/copy.js).

The header has an EN / ES toggle. The choice is saved in `localStorage`. The insurance offer always includes the official Spanish flyer wording, even in English.

The contact form uses `mailto:` to the email on file. There is a TODO in `siteConfig.js` and on the Contact page to replace that with a real backend.

## Verified facts and sources

Retrieved November 25, 2026.

| Fact | Source |
| --- | --- |
| Name, categories (roofing contractors, residential roofing) | BBB profile and listing card |
| Phone (800) 362-5997 | BBB, CSLB, existing website, company flyer |
| Local / WhatsApp (213) 440-2978 | Company flyer (WhatsApp icon) |
| Address: 626 Wilshire Blvd #410, Los Angeles, CA 90017 | BBB, existing website (CSLB has a “Willshire” typo) |
| Hours: Mon–Fri 8:00 AM–5:00 PM | BBB profile |
| BBB accredited since October 17, 2025; official rating A- | [BBB profile](https://www.bbb.org/us/ca/los-angeles/profile/roofing-contractors/roofing-knights-1216-1000035069) |
| Business started March 27, 2024; corporation; CEO Ivette Banda | BBB profile |
| CSLB license #1120662, C-39 Roofing, issued May 10, 2024, expires May 31, 2028, status current and active as of Nov 25, 2026 | [CSLB license 1120662](https://www.cslb.ca.gov/1120662) |
| RMO Noel Perez | CSLB personnel record |
| CA Secretary of State entity 6143179 | BBB profile |
| Email roofingknights24@gmail.com | Existing site [roofingknightsca.com/contact](https://roofingknightsca.com/contact/) — still needs confirmation |
| Services: roof repair, replacement, installation | [roofingknightsca.com/services](https://roofingknightsca.com/services/) |
| Insurance-claim help and a free consultation | Company flyer (Spanish copy used verbatim) |
| Two customer reviews (marcFore13 F, Nancy M) | BBB “Latest Reviews” |
| Completed shingle-roof photo | Cropped from the company flyer (logo, text, and graphic bars removed) |
| TikTok @roofing.knights | Provided by Alexander; [tiktok.com/@roofing.knights](https://www.tiktok.com/@roofing.knights) |

A BBB directory card and the screenshot Alexander sent showed rating “A”. The official BBB profile and the accredited category listing show “A-”. This site uses A-.

The existing WordPress site claims “24/7 Support.” That conflicts with the BBB hours, so this site does not claim 24/7.

Generic testimonials on the existing website were not used (no names, and the “Roof Repair” blurb describes a replacement).

## Owner note: license and insurance claims

The CSLB page retrieved November 25, 2026 also says the registration *may be suspended on December 19, 2026* for failure to comply with one or more provisions of law. Workers’ compensation shows a cancellation date of September 5, 2026. This is **not** shown on the public pages, but the site also does **not** claim “bonded and insured.” Confirm the current status with the client before launch, and keep the “Verify license on CSLB” link.

## Placeholders still needed

- Confirm the contact email (currently taken from the existing website)
- Saturday and Sunday hours
- Service area (cities / counties)
- Company story and team photos
- Additional project photos (five placeholder slots)
- Additional reviews, including the Spanish BBB review from Maria R if the full wording can be confirmed
- Whether “roof inspections” is a real standalone service
- Warranty terms (none are stated)
- A real form backend to replace `mailto:`

## Stack

React 18, Vite 6, React Router 6 (HashRouter), plain CSS.
