import type { MetadataRoute } from "next";
import { getGalleryPhotos } from "@/lib/images";
import { abs } from "@/lib/site";

const photo = (name: string) => `/assets/img/photos/${name}.webp`;

// Every public page, with its key photos for Google Images; add new routes here
const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  images: () => string[];
}[] = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly",
    images: () => [
      "/og/og-default.jpg",
      photo("tool-room-five-axis"),
      photo("hsm-mold-core"),
      photo("wheel-cover-mold"),
      photo("edm-twin-head"),
      photo("design-studio"),
      photo("quality-fixture-inspection"),
    ],
  },
  {
    path: "/our-products",
    priority: 0.9,
    changeFrequency: "monthly",
    images: () => [
      "/og/our-products.jpg",
      photo("wheel-cover-mold-assembly"),
      ...["badge", "front-facia", "rear-module", "side-door", "cockpit", "wheel", "accessories", "performance"].map(
        (m) => `/assets/img/products/mold-${m}.webp`,
      ),
    ],
  },
  { path: "/what-we-do", priority: 0.8, changeFrequency: "monthly", images: () => ["/og/what-we-do.jpg", photo("mold-trial-press")] },
  { path: "/about", priority: 0.8, changeFrequency: "yearly", images: () => ["/og/about.jpg", photo("upec-team-2026"), photo("team-tool-room")] },
  {
    path: "/media",
    priority: 0.6,
    changeFrequency: "monthly",
    images: () => ["/og/media.jpg", photo("edm-electrode-sparking"), ...getGalleryPhotos().map((p) => p.src)],
  },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly", images: () => ["/og/contact.jpg", photo("team-at-plant")] },
];

// The site is a static export, so these files are generated once at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency, images }) => ({
    url: abs(path),
    lastModified,
    changeFrequency,
    priority,
    images: images().map((src) => abs(src)),
  }));
}
