import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import JsonLd from "@/components/JsonLd";
import { abs, pageMetadata, SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.shortName} | ${SITE.name}, Yamuna Nagar`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Manufacturing",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...pageMetadata({ description: SITE.description, path: "/" }),
  icons: { icon: SITE.logo, apple: SITE.logo },
};

export const viewport: Viewport = {
  themeColor: "#061a33",
};

// Company + website facts for search engines (Knowledge Panel, sitelinks)
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      alternateName: SITE.shortName,
      legalName: SITE.legalName,
      slogan: SITE.tagline,
      description: SITE.description,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: abs(SITE.logo) },
      image: abs(SITE.ogImage),
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: SITE.foundingDate,
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: SITE.employees },
      address: { "@type": "PostalAddress", ...SITE.address },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
      parentOrganization: { "@type": "Organization", name: SITE.parentOrganization },
      knowsAbout: ["Injection mold design", "Automotive tooling", "High gloss molds", "In-mold decoration (IMD)", "2K molding", "Kromex", "CAE flow simulation"],
      ...(SITE.sameAs.length > 0 && { sameAs: SITE.sameAs }),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      alternateName: SITE.shortName,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${poppins.variable} overflow-x-hidden scroll-smooth`}>
      <body className="w-full overflow-x-hidden bg-white font-sans leading-[1.65] text-ink antialiased max-xl:[&.nav-open]:overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
        <JsonLd data={ORG_JSON_LD} />
      </body>
    </html>
  );
}
