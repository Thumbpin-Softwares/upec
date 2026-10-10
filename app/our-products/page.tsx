import type { Metadata } from "next";
import { CtaBanner, PageHeader, ProductCard, Section, SectionHead, TagCloud } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Decorative automotive tooling by industry and product: ID decals, facia decoratives, wheel covers, cockpit decorations and delivered programs for Renault, Nissan and more.",
};

type Product = { src: string; alt: string; title: string; text: string; contain?: boolean };

const INDUSTRY: Product[] = [
  { src: "/assets/img/products/badge-decalls.jpg", alt: "Chrome Renault and Kwid badges", contain: true, title: "ID Decals & Badges (Emblems)", text: "Precision emblem and badge tooling for brand identity across the vehicle body." },
  { src: "/assets/img/products/front-grill.avif", alt: "Gloss black front grille", title: "Front Facia Decoratives", text: "Grille and front-module decorative components, tooled for Hi-Gloss and chrome finishes." },
  { src: "/assets/img/products/mold-tool-progression.jpg", alt: "Rear door decorative tooling", title: "Rear Modules Decoratives", text: "Rear module and door decorative tooling engineered for consistent fit and finish." },
  { src: "/assets/img/products/mold-base-render.jpg", alt: "Side panel and door decorative tooling", title: "Side Panel / Door Decoratives", text: "Side panel trims and door decoratives tooled to tight cosmetic tolerances." },
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "Cockpit decoration tooling", title: "Cockpit Decorations", text: "Interior decorative components tooled for precision assembly fit." },
  { src: "/assets/img/products/wheeldecorative.avif", alt: "Silver multi-spoke decorative wheel", title: "Decoratives in Motion (Wheel Parts)", text: "Wheel covers and rotating decorative parts, engineered for balance and finish." },
  { src: "/assets/img/products/wheel-cover-tool.jpg", alt: "Accessories and illumination tooling", title: "Accessories & Illumination", text: "Decorative accessory and illumination-ready component tooling." },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Performance parts tooling", title: "Performance Parts", text: "Functional-decorative components engineered for performance applications." },
];

export default function OurProducts() {
  return (
    <>
      <PageHeader
        title="Our Products"
        crumb="Our Products"
        lead="Decorative tooling across every visible touchpoint of a vehicle, organised by category."
        image="/assets/img/products/facia-tool-cavity.jpg"
      />

      <Section id="industry-wise">
        <SectionHead eyebrow="Industry Wise" title="What we tool, category by category" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
          {INDUSTRY.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Technologies" title="Finish technologies we specialise in" />
        <TagCloud tags={["Hi-Gloss", "In-Mold Decoration (IMD)", "2K Molding", "Kromex Chrome Finish"]} />
        <CtaBanner
          title="Need a custom decorative tooling program?"
          text="Share your part drawings and timelines and our engineering team will take it from there."
          href="/contact"
          label="Start a Conversation"
          className="mt-11"
        />
      </Section>
    </>
  );
}
