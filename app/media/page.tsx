import type { Metadata } from "next";
import Gallery, { type Photo } from "@/components/Gallery";
import VideoEmbed from "@/components/VideoEmbed";
import { CELEBRATION_PHOTOS } from "@/lib/images";
import { CtaBanner, PageHeader, Section, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Corporate film and photo gallery of UPEC's plant, engineering floor and decorative tooling programs.",
};

// Order matters for the bento grid: one "large" + one "wide" tile fill 3 full rows of 4 on desktop
const PHOTOS: Photo[] = [
  { src: "/assets/img/photos/engineering-team.jpg", alt: "Design and CAE engineering studio", caption: "Design & CAE engineering studio", title: "Engineering Studio", subtitle: "Design & CAE Team", size: "large" },
  { src: "/assets/img/photos/shop-floor-edm.jpg", alt: "EDM and wire-cut machine shop floor", caption: "EDM & wire-cut shop floor", title: "Shop Floor", subtitle: "EDM & Wire-Cut Section" },
  { src: "/assets/img/products/wheel-cover-tool.jpg", alt: "Complete wheel cover tool assembly", caption: "Complete wheel cover tool assembly", title: "Wheel Cover Tool", subtitle: "Full Tool Assembly" },
  { src: "/assets/img/products/front-grill.avif", alt: "Gloss black front grille", caption: "Front grille: Hi-Gloss black finish", title: "Front Grille", subtitle: "Hi-Gloss Finished Part" },
  { src: "/assets/img/products/wheel-cover-mold.jpg", alt: "Renault Kiger rear exterior", caption: "Renault Kiger: front & rear exterior decoratives program", title: "Renault Kiger", subtitle: "Exterior Decoratives Program" },
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "High speed CNC machining centre", caption: "High-speed CNC machining centre", title: "CNC Machining", subtitle: "High-Speed Machining Centre", size: "wide" },
  { src: "/assets/img/products/mold-base-render.jpg", alt: "Full mold base assembly render", caption: "Full mold base assembly render", title: "Tooling Craft", subtitle: "Mold Base Assembly" },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Cadmould fill-time flow simulation of a wheel cover", caption: "Wheel cover fill analysis: Cadmould flow simulation", title: "Flow Simulation", subtitle: "Wheel Cover Fill Analysis" },
];

export default function Media() {
  return (
    <>
      <PageHeader
        title="Media"
        crumb="Media"
        lead="A look inside our plant, our engineering floor, and the decorative tooling we build."
        image="/assets/img/photos/shop-floor-edm.jpg"
      />

      <Section>
        <SectionHead eyebrow="Corporate Film" title="UPEC in motion" />
        <VideoEmbed id="GekU2WH7bgs" title="UPEC corporate film" poster="/assets/img/photos/shop-floor-cnc.jpg" />
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Photo Gallery" title="Inside our shop floor & engineering studio">
        </SectionHead>
        <Gallery photos={PHOTOS} />
      </Section>

      {/* Fills itself from public/assets/img/celebrations; hidden until that folder has photos */}
      {CELEBRATION_PHOTOS.length > 0 && (
        <Section id="celebrations">
          <SectionHead eyebrow="Life at UPEC" title="Festivals & celebrations" />
          <Gallery photos={CELEBRATION_PHOTOS} />
        </Section>
      )}

      <Section>
        <CtaBanner
          title="Want the full picture?"
          text="Talk to us about a plant visit or a detailed capability walkthrough."
          href="/contact"
          label="Contact Us"
        />
      </Section>
    </>
  );
}
