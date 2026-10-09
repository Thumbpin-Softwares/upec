import type { Metadata } from "next";
import { Play } from "lucide-react";
import Gallery, { type Photo } from "@/components/Gallery";
import { CtaBanner, PageHeader, Section, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Corporate film and photo gallery of UPEC's plant, engineering floor and decorative tooling programs.",
};

const PHOTOS: Photo[] = [
  { src: "/assets/img/photos/engineering-team.jpg", alt: "Design and CAE engineering studio", caption: "Design & CAE engineering studio", title: "Engineering Studio", subtitle: "Design & CAE Team" },
  { src: "/assets/img/photos/shop-floor-edm.jpg", alt: "EDM and wire-cut machine shop floor", caption: "EDM & wire-cut shop floor", title: "Shop Floor", subtitle: "EDM & Wire-Cut Section" },
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "High speed CNC machining centre", caption: "High-speed CNC machining centre", title: "CNC Machining", subtitle: "High-Speed Machining Centre" },
  { src: "/assets/img/products/facia-grille-exploded.jpg", alt: "Front facia decorative exploded engineering view", caption: "Front facia decorative: exploded engineering view", title: "Facia Decorative", subtitle: "Exploded Engineering View" },
  { src: "/assets/img/products/wheel-cover-mold.jpg", alt: "Wheel cover decorative mold cavity", caption: "Wheel cover decorative mold cavity", title: "Wheel Decorative", subtitle: "Mold Cavity Detail" },
  { src: "/assets/img/products/wheel-cover-tool.jpg", alt: "Complete wheel cover tool assembly", caption: "Complete wheel cover tool assembly", title: "Wheel Decorative", subtitle: "Full Tool Assembly" },
  { src: "/assets/img/products/mold-base-render.jpg", alt: "Full mold base assembly render", caption: "Full mold base assembly render", title: "Tooling Craft", subtitle: "Mold Base Assembly" },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Exterior module decorative exploded view", caption: "Exterior module decorative: exploded view", title: "Exterior Module", subtitle: "Decorative Component Set" },
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
        <SectionHead eyebrow="Corporate Film" title="UPEC in motion">
          Our corporate film is freshly shot and on its way. This space is ready and will go live as
          soon as the final edit is in hand.
        </SectionHead>
        <div className="reveal mx-auto flex aspect-video max-w-225 flex-col items-center justify-center gap-3.5 rounded-card border border-dashed border-white/25 bg-navy-900 text-white">
          <div className="flex size-19 cursor-pointer items-center justify-center rounded-full bg-cyan-500 transition-[scale] hover:scale-108">
            <Play className="ml-1 size-6.5 fill-navy-900 text-navy-900" />
          </div>
          <span>Corporate Film: Coming Soon</span>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Photo Gallery" title="Inside our shop floor & engineering studio">
          Click any photo to view it full-size.
        </SectionHead>
        <Gallery photos={PHOTOS} />
      </Section>

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
