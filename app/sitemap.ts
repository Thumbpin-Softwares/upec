import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";

// Every public page; add new routes here so search engines find them
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/our-products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-we-do", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/media", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

// The site is a static export, so these files are generated once at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: abs(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
