import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { CtaBanner, PageHeader, ProductCard, Section, SectionHead, TagCloud } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Our Products: Decorative Automotive Molds",
  description:
    "Molds for every vehicle segment: emblems, front facia, rear and side decoratives, cockpit trims and wheel covers, in high gloss, IMD, 2K and Kromex.",
  path: "/our-products",
});

type Product = { src: string; alt: string; title: string; contain?: boolean };

// Grouped by area of the vehicle; each card shows a UPEC mold built for that segment
const SEGMENTS: Product[] = [
  { src: "/assets/img/products/mold-badge.webp", alt: "Injection mold for an emblem garnish", contain: true, title: "ID Decals & Badges (Emblems)" },
  { src: "/assets/img/products/mold-front-facia.webp", alt: "Injection mold for a front grille", contain: true, title: "Front Facia Decoratives" },
  { src: "/assets/img/products/mold-rear-module.webp", alt: "Injection mold for a rear garnish", contain: true, title: "Rear Modules Decoratives" },
  { src: "/assets/img/products/mold-side-door.webp", alt: "Injection mold for a side panel decorative", contain: true, title: "Side Panel / Door Decoratives" },
  { src: "/assets/img/products/mold-cockpit.webp", alt: "Injection mold for interior trim panels", contain: true, title: "Cockpit Decorations" },
  { src: "/assets/img/products/mold-wheel.webp", alt: "Injection mold for a wheel cover", contain: true, title: "Decoratives in Motion (Wheel Parts)" },
  { src: "/assets/img/products/mold-accessories.webp", alt: "Injection mold for decorative accessory strips", contain: true, title: "Accessories & Illumination" },
  { src: "/assets/img/products/mold-performance.webp", alt: "Injection mold for air guide parts", contain: true, title: "Performance Parts" },
];

export default function OurProducts() {
  return (
    <>
      <PageHeader
        path="/our-products"
        title="Our Products"
        crumb="Our Products"
        lead="Molds for every visible decorative touchpoint of a vehicle, organised by vehicle segment."
        image="/assets/img/photos/wheel-cover-mold-assembly.webp"
      />

      <Section id="vehicle-segment-wise">
        <SectionHead eyebrow="Vehicle Segment Wise" title="What we tool, segment by segment" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
          {SEGMENTS.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Technologies" title="Tooling technologies we specialise in" />
        <TagCloud tags={["High Gloss Parts", "In Mold Decoration (IMD)", "2K Molds", "Kromex", "Prototype Parts"]} />
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
