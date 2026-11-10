import type { Metadata } from "next";

/**
 * Single source of truth for SEO: company facts, the public URL and page metadata.
 *
 * Domain: set NEXT_PUBLIC_SITE_URL in the deploy environment (e.g. https://www.upec.co.in).
 * The fallback below is a placeholder until the final domain is confirmed.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upec.co.in").replace(/\/$/, "");

export const SITE = {
  name: "United Precision Engineering Company",
  shortName: "UPEC",
  legalName: "United Precision Engineering Company Pvt. Ltd.",
  tagline: "Passionate Performance!",
  description:
    "United Precision Engineering Company (UPEC), an affiliate of Polyplastics (India), is a specialized tool maker for high-gloss, high-aesthetics decorative automotive parts, including 2K, IMD, illumination and Kromex molds, from Yamuna Nagar, India.",
  phone: "+91-99716-97292",
  email: "COO@UPEC.co.in",
  foundingDate: "1996-04",
  employees: 170,
  address: {
    streetAddress: "Unit E-13, Industrial Area",
    addressLocality: "Yamuna Nagar",
    addressRegion: "Haryana",
    postalCode: "135001",
    addressCountry: "IN",
  },
  parentOrganization: "Polyplastics (India)",
  logo: "/assets/img/upec-logo.png",
  ogImage: "/og/og-default.jpg",
  keywords: [
    "UPEC",
    "United Precision Engineering Company",
    "injection mold maker India",
    "automotive tooling",
    "decorative automotive parts",
    "high gloss molds",
    "IMD molds",
    "in mold decoration",
    "2K molds",
    "Kromex",
    "automotive grille mold",
    "wheel cover mold",
    "emblem and badge tooling",
    "tool room Yamuna Nagar",
    "Polyplastics",
  ],
  // Add the real profile URLs here once they're confirmed (also used in the footer)
  sameAs: [] as string[],
};

/** Absolute URL for a site path, e.g. abs("/about") */
export const abs = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * Metadata for one page: title, description, canonical URL and share cards.
 * openGraph/twitter are set in full here because Next replaces (not merges) them per page.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const shareTitle = title ? `${title} | ${SITE.shortName}` : `${SITE.shortName} | ${SITE.name}`;
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE.name,
      url: path,
      title: shareTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}
