import fs from "node:fs";
import path from "node:path";

// Folders under public/ whose images are listed automatically. These are functions,
// called while a page renders, so `next dev` sees added/removed files on refresh and
// the static export picks them up at build time.

const IMAGE_EXT = /\.(svg|png|jpe?g|webp|avif)$/i;

/** "diwali celebration 2025" -> "Diwali Celebration 2025" */
const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

/** "royal_enfield" / "diwali-2025" -> "royal enfield" / "diwali 2025" */
const humanize = (s: string) => s.replace(/[_-]+/g, " ").trim();

/** All images in `public/<dir>`, sorted by file name; [] if the folder is missing or empty. */
function readImages(dir: string) {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()
    .map((f) => ({ src: `/${dir}/${f}`, file: path.parse(f).name, name: humanize(path.parse(f).name) }));
}

/** Client logos: public/assets/logo (file name = brand name, e.g. Royal_Enfield.svg) */
export const getClientLogos = () => readImages("assets/logo");

/** Gallery photos captioned from their file names (diwali-2025.jpg -> "Diwali 2025") */
function captionedPhotos(dir: string) {
  return readImages(dir).map(({ src, name }) => {
    const title = titleCase(name);
    return { src, alt: title, caption: title, title };
  });
}

/** Company events, visits, expos: public/assets/img/events */
export const getEventPhotos = () => captionedPhotos("assets/img/events");

/** Festival celebrations: public/assets/img/celebrations */
export const getCelebrationPhotos = () => captionedPhotos("assets/img/celebrations");

/**
 * Main photo gallery: public/assets/img/gallery.
 * File name = "<order>-<title>__<subtitle>", e.g. 01-engineering-studio__design-and-CAE-team.jpg
 * -> title "Engineering Studio", subtitle "Design And CAE Team". The order number and the
 * subtitle are both optional; files sort by name, so the number controls the order.
 */
export const getGalleryPhotos = () =>
  bento(
    readImages("assets/img/gallery").map(({ src, file }) => {
      const [title, subtitle] = file
        .replace(/^\d+[\s_-]*/, "")
        .split("__")
        .map((part) => titleCase(humanize(part)));
      const caption = subtitle ? `${title}: ${subtitle}` : title;
      return { src, alt: caption, caption, title, subtitle };
    }),
  );

/**
 * Bento sizes for a 4-column grid: the first photo is large (2x2), then just enough
 * photos are made wide (2x1), spread from the end, that every row comes out full.
 */
function bento<T>(photos: T[]): (T & { size?: "large" | "wide" })[] {
  const n = photos.length;
  // Two photos can't frame a large tile, so they share one row as wides
  if (n === 2) return photos.map((p) => ({ ...p, size: "wide" as const }));
  const missing = (4 - ((n + 3) % 4)) % 4;
  const count = Math.min(missing, n - 1);
  // Evenly spaced over indexes 1..n-1, starting from the last photo
  const wide = new Set(Array.from({ length: count }, (_, k) => n - 1 - Math.floor((k * (n - 1)) / count)));
  return photos.map((p, i) => ({ ...p, size: i === 0 ? "large" : wide.has(i) ? "wide" : undefined }));
}
