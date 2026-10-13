# UPEC Website

Website for United Precision Engineering Company (UPEC), built with Next.js (App Router), TypeScript and bun.

## Getting started

```sh
bun install
bun dev          # http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
bun run lint
```

## Structure

- `app/`: routes: `/`, `/about`, `/what-we-do`, `/our-products`, `/media`, `/contact`; `globals.css` holds the site stylesheet (CSS variables for the navy/cyan brand palette)
- `components/`: header/nav, footer, shared section blocks, icons, and client components (scroll reveal, stat counters, gallery lightbox, contact form)
- `public/assets/img/`: logo, plant photos and product/tooling renders from the company overview deck
- `public/assets/img/celebrations/`: festival & event photos for the Media page. Drop images in (jpg/png/webp/avif) and rebuild; the "Festivals & celebrations" section appears automatically and is hidden while the folder is empty. The file name becomes the caption: `diwali-2025.jpg` shows as "Diwali 2025".
- `public/assets/logo/`: client logos, shown on the home and About pages. The file name becomes the brand name: `Royal_Enfield.svg` shows as "Royal Enfield".

## Known placeholders (to swap in before launch)

- **Corporate film** (`/media`): YouTube video `GekU2WH7bgs`, shown with a local poster; the player only loads when a visitor presses play (`components/VideoEmbed.tsx`).
- **Contact form** (`/contact`): front-end only (shows a confirmation message on submit). Needs wiring to a real handler (e.g. a route handler + mail API).
- **Product photos**: several categories reuse the CAD/tooling renders from the overview deck. Swap in real product photography once available.
- Client logos are shown as text badges rather than brand marks. Replace with actual logo files if/when usage is cleared with each OEM.
