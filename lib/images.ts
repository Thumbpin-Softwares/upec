import fs from "node:fs";
import path from "node:path";

// Folders under public/ whose images are listed automatically. They're read at
// build time, so the static export picks up added/removed files on the next build.

const IMAGE_EXT = /\.(svg|png|jpe?g|webp|avif)$/i;

/** All images in `public/<dir>`, sorted by file name; [] if the folder is missing or empty. */
function readImages(dir: string) {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()
    .map((f) => ({ src: `/${dir}/${f}`, name: path.parse(f).name.replace(/[_-]+/g, " ").trim() }));
}

/** "diwali celebration 2025" -> "Diwali Celebration 2025" */
const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

/** Client logos: public/assets/logo (file name = brand name, e.g. Royal_Enfield.svg) */
export const CLIENT_LOGOS = readImages("assets/logo");

/** Festival & event photos: public/assets/img/celebrations (file name = caption, e.g. diwali-2025.jpg) */
export const CELEBRATION_PHOTOS = readImages("assets/img/celebrations").map(({ src, name }) => {
  const title = titleCase(name);
  return { src, alt: title, caption: title, title };
});
