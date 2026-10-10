import fs from "node:fs";
import path from "node:path";

// Every image in public/assets/logo is shown; add or remove files to change the grid.
// Read at build time, so the static export picks up new logos on the next build.
const LOGO_DIR = path.join(process.cwd(), "public/assets/logo");

export const CLIENT_LOGOS = fs
  .readdirSync(LOGO_DIR)
  .filter((f) => /\.(svg|png|jpe?g|webp|avif)$/i.test(f))
  .sort()
  .map((f) => ({ src: `/assets/logo/${f}`, name: path.parse(f).name.replace(/[_-]+/g, " ") }));
