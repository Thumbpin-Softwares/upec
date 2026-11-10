import type { MetadataRoute } from "next";
import { abs, SITE_URL } from "@/lib/site";

// The site is a static export, so these files are generated once at build time
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
