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

- `app/` — routes: `/`, `/about`, `/what-we-do`, `/our-products`, `/media`, `/contact`; `globals.css` holds the site stylesheet (CSS variables for the navy/cyan brand palette)
- `components/` — header/nav, footer, shared section blocks, icons, and client components (scroll reveal, stat counters, gallery lightbox, contact form)
- `public/assets/img/` — logo, plant photos and product/tooling renders from the company overview deck

## Known placeholders (to swap in before launch)

- **Corporate film** (`/media`) — placeholder card; drop in the real video/embed once the edit is ready.
- **Contact form** (`/contact`) — front-end only (shows a confirmation message on submit). Needs wiring to a real handler (e.g. a route handler + mail API).
- **Product photos** — several categories reuse the CAD/tooling renders from the overview deck. Swap in real product photography once available.
- Client logos are shown as text badges rather than brand marks — replace with actual logo files if/when usage is cleared with each OEM.
