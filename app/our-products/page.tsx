import type { Metadata } from "next";
import { CtaBanner, PageHeader, ProductCard, Section, SectionHead, TagCloud } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Decorative automotive tooling by industry and product — ID decals, facia decoratives, wheel covers, cockpit decorations and delivered programs for Renault, Nissan and more.",
};

type Product = { src: string; alt: string; tag: string; title: string; text: string };

const INDUSTRY: Product[] = [
  { src: "/assets/img/products/grille-assembly-parts.jpg", alt: "ID decals and badge emblem tooling", tag: "Automotive", title: "ID Decals & Badges (Emblems)", text: "Precision emblem and badge tooling for brand identity across the vehicle body." },
  { src: "/assets/img/products/facia-grille-exploded.jpg", alt: "Front facia decorative tooling exploded view", tag: "Automotive", title: "Front Facia Decoratives", text: "Grille and front-module decorative components, tooled for Hi-Gloss and chrome finishes." },
  { src: "/assets/img/products/mold-tool-progression.jpg", alt: "Rear door decorative tooling", tag: "Automotive", title: "Rear Door Decoratives", text: "Rear module and door decorative tooling engineered for consistent fit and finish." },
  { src: "/assets/img/products/mold-base-render.jpg", alt: "Side panel and door decorative tooling", tag: "Automotive", title: "Side Panel / Door Decoratives", text: "Side panel trims and door decoratives tooled to tight cosmetic tolerances." },
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "Cockpit decoration tooling", tag: "Interior", title: "Cockpit Decorations", text: "Interior decorative components tooled for precision assembly fit." },
  { src: "/assets/img/products/wheel-cover-mold.jpg", alt: "Wheel cover decorative mold cavity", tag: "In-Motion", title: "Decoratives in Motion (Wheel Parts)", text: "Wheel covers and rotating decorative parts, engineered for balance and finish." },
  { src: "/assets/img/products/wheel-cover-tool.jpg", alt: "Accessories and illumination tooling", tag: "Accessories", title: "Accessories & Illumination", text: "Decorative accessory and illumination-ready component tooling." },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Performance parts tooling", tag: "Performance", title: "Performance Parts", text: "Functional-decorative components engineered for performance applications." },
];

const PROGRAMS: Product[] = [
  { src: "/assets/img/products/facia-grille-exploded.jpg", alt: "Renault Duster front exterior decorative tooling", tag: "100+ Parts · 12 Month KO–SOP", title: "Renault Duster", text: "Front & rear exterior decoratives, ornaments and badges across 3 plant and 4 tooling locations." },
  { src: "/assets/img/products/grille-assembly-parts.jpg", alt: "Renault Captur front grille and rear panel decorative tooling", tag: "20 Parts · 12 Month KO–SOP", title: "Renault Captur", text: "Front grille, door side decoratives and rear panel decoratives across 4 plant locations." },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Renault Kiger and Triber exterior decorative tooling", tag: "34+ Parts · 16 Month KO–SOP", title: "Renault Kiger / Triber", text: "Front & rear exterior module decoratives across 3 plant and 4 tooling locations." },
  { src: "/assets/img/products/wheel-cover-tool.jpg", alt: "Hi-gloss decorative wheel cover tooling", tag: "In-Motion Decorative", title: "Hi-Gloss Wheel Cover Tooling", text: "Decorative wheel cover mold engineered for a consistent high-gloss finish in motion." },
  { src: "/assets/img/products/facia-tool-cavity.jpg", alt: "Grille tool cavity insert", tag: "Tooling Craft", title: "Grille Tool Cavity & Insert", text: "Precision cavity and insert engineering behind every facia grille program." },
  { src: "/assets/img/products/mold-base-render.jpg", alt: "Complete mold base assembly render", tag: "Tooling Craft", title: "Full Mold Base Assembly", text: "Complete tool build — from base plate to cavity — engineered in-house." },
];

export default function OurProducts() {
  return (
    <>
      <PageHeader
        title="Our Products"
        crumb="Our Products"
        lead="Decorative tooling across every visible touchpoint of a vehicle — organised by industry and by program."
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

      <Section id="final-products" tone="grey">
        <SectionHead eyebrow="Final Products" title="Programs delivered">
          A snapshot of decorative tooling programs completed end-to-end — from creative concept to
          tool manufacturing.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <ProductCard key={p.title} {...p} cover />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Technologies" title="Finish technologies we specialise in" />
        <TagCloud tags={["Hi-Gloss", "In-Mold Decoration (IMD)", "2K Molding", "Kromex Chrome Finish"]} />
        <CtaBanner
          title="Need a custom decorative tooling program?"
          text="Share your part drawings and timelines — our engineering team will take it from there."
          href="/contact"
          label="Start a Conversation"
          className="mt-11"
        />
      </Section>
    </>
  );
}
