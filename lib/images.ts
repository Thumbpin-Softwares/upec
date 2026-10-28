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

/** Leading order number, e.g. the "01-" in "01-diwali"; used for sorting, never shown */
const stripOrder = (s: string) => s.replace(/^\d+[\s_-]*/, "");

/** All images in `public/<dir>`, sorted by file name; [] if the folder is missing or empty. */
function readImages(dir: string) {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    // encodeURIComponent: file names like "image copy 2.png" contain spaces
    .map((f) => ({ src: `/${dir}/${encodeURIComponent(f)}`, file: path.parse(f).name, name: humanize(path.parse(f).name) }));
}

/** Width / height of an SVG (from its viewBox, else width/height) or PNG (from its header); undefined if unknown */
function aspectRatio(file: string): number | undefined {
  try {
    if (file.endsWith(".png")) {
      const head = fs.readFileSync(file).subarray(16, 24);
      return head.readUInt32BE(0) / head.readUInt32BE(4);
    }
    if (file.endsWith(".svg")) {
      const tag = fs.readFileSync(file, "utf8").match(/<svg\b[^>]*>/)?.[0] ?? "";
      const vb = tag.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
      if (vb?.length === 4 && vb[3] > 0) return vb[2] / vb[3];
      const w = parseFloat(tag.match(/\bwidth="([\d.]+)/)?.[1] ?? "");
      const h = parseFloat(tag.match(/\bheight="([\d.]+)/)?.[1] ?? "");
      if (w > 0 && h > 0) return w / h;
    }
  } catch {}
  return undefined;
}

/**
 * Optical size tweaks for logos whose artwork reads lighter than its shape suggests
 * (thin strokes, small taglines, fine detail). Keyed by file name without extension.
 */
const LOGO_SCALE: Record<string, number> = {
  Ashok_Leyland: 1.35,
  BharatBenz: 1.2,
  Nissan: 1.15,
  Stellantis: 1.25,
};

/** Client logos: public/assets/logo (file name = brand name, e.g. Royal_Enfield.svg) */
export const getClientLogos = () =>
  readImages("assets/logo").map((logo) => ({
    ...logo,
    ratio: aspectRatio(path.join(process.cwd(), "public", decodeURIComponent(logo.src))),
    scale: LOGO_SCALE[logo.file],
  }));

/** Camera / clipboard names like "image copy 2", "IMG_1234", "WhatsApp Image ..." say nothing about the photo */
const GENERIC_NAME = /^(image|img|photo|pic|dsc|pxl|screenshot|whatsapp)\b/i;

/** "newYear" / "02-vishwakarma_puja" -> "New Year" / "Vishwakarma Puja" */
const folderTitle = (s: string) => titleCase(humanize(stripOrder(s).replace(/([a-z])([A-Z])/g, "$1 $2")));

export type PhotoGroup = {
  id: string;
  /** Empty for photos placed directly in the section folder rather than a subfolder */
  title: string;
  photos: { src: string; alt: string; caption: string; title: string; subtitle?: string }[];
};

/**
 * One group per subfolder of `public/<dir>` (e.g. celebrations/diwali, celebrations/holi),
 * titled from the folder name. Each photo is captioned with that title, plus its own file
 * name as a subtitle when the name is descriptive. Empty subfolders are skipped.
 */
function photoGroups(dir: string): PhotoGroup[] {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];

  const group = (id: string, title: string, sub: string): PhotoGroup => ({
    id,
    title,
    photos: readImages(sub).map(({ src, file }, i) => {
      const own = GENERIC_NAME.test(file) ? undefined : titleCase(humanize(stripOrder(file)));
      const caption = own ? (title ? `${title}: ${own}` : own) : title;
      return { src, alt: caption || `Photo ${i + 1}`, caption, title: title || own || "", subtitle: title ? own : undefined };
    }),
  });

  const folders = fs
    .readdirSync(abs, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return [
    ...folders.map((name) => group(stripOrder(name).toLowerCase(), folderTitle(name), `${dir}/${name}`)),
    group("more", "", dir),
  ].filter((g) => g.photos.length > 0);
}

/** Company events, visits, expos: public/assets/img/events/<event-name>/ */
export const getEventGroups = () => photoGroups("assets/img/events");

/** Festival celebrations: public/assets/img/celebrations/<festival-name>/ */
export const getCelebrationGroups = () => photoGroups("assets/img/celebrations");

/**
 * Main photo gallery: public/assets/img/gallery.
 * File name = "<order>-<title>__<subtitle>", e.g. 01-engineering-studio__design-and-CAE-team.jpg
 * -> title "Engineering Studio", subtitle "Design And CAE Team". The order number and the
 * subtitle are both optional; files sort by name, so the number controls the order.
 */
export const getGalleryPhotos = () =>
  bento(
    readImages("assets/img/gallery").map(({ src, file }) => {
      const [title, subtitle] = stripOrder(file)
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
