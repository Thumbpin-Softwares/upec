# UPEC Website — Draft

Static HTML/CSS/JS draft of the United Precision Engineering Company (UPEC) website, built from the sitemap agreed with Aseem Kumar (Business Head) and the content in `UPEC Overview` deck. Intended as a dummy/preview to sign off on before slicing into WordPress.

## Pages

- `index.html` — Home
- `about.html` — About Us (Our Story, Our Team, Our Clients)
- `what-we-do.html` — What We Do (Our Process, Who We Work For)
- `our-products.html` — Our Products (Industry Wise, Final Products)
- `media.html` — Media (corporate film placeholder + photo gallery)
- `contact.html` — Contact Us (form, contact details, map)

No build step — open `index.html` directly, or serve the folder with any static server (e.g. `python3 -m http.server`).

## Structure

- `assets/css/style.css` — single stylesheet, CSS variables for the navy/cyan brand palette
- `assets/js/main.js` — mobile nav, scroll-reveal, stat counters, lightbox gallery, contact form handling
- `assets/img/` — logo, plant photos and product/tooling renders pulled from the company overview deck

## Known placeholders (to swap in before launch)

- **Corporate film** (`media.html`) — placeholder card; drop in the real video/embed once the edit is ready.
- **Contact form** (`contact.html`) — currently front-end only (shows a confirmation message on submit). Needs wiring to a real handler once this becomes a WordPress page (e.g. WPForms/Contact Form 7, or a mail API).
- **Product photos** — several categories currently reuse the CAD/tooling renders from the overview deck. Swap in the real product photography once available.
- Client logos are shown as text badges rather than pulled brand marks — replace with actual logo files if/when usage is cleared with each OEM.
