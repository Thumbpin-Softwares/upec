import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import VideoEmbed from "@/components/VideoEmbed";
import { getCelebrationPhotos, getEventPhotos, getGalleryPhotos } from "@/lib/images";
import { CtaBanner, PageHeader, Section, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Corporate film and photo gallery of UPEC's plant, engineering floor and decorative tooling programs.",
};

export default function Media() {
  // Optional galleries after the (grey) photo gallery; tones alternate over the visible ones
  const photoSections = [
    { id: "events", eyebrow: "Events", title: "Events & milestones", photos: getEventPhotos() },
    { id: "celebrations", eyebrow: "Life at UPEC", title: "Festivals & celebrations", photos: getCelebrationPhotos() },
  ].filter((sec) => sec.photos.length > 0);

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
        <Gallery photos={getGalleryPhotos()} />
      </Section>

      {/* Each fills itself from its folder and stays hidden until that folder has photos */}
      {photoSections.map((sec, i) => (
        <Section key={sec.id} id={sec.id} tone={i % 2 ? "grey" : "white"}>
          <SectionHead eyebrow={sec.eyebrow} title={sec.title} />
          <Gallery photos={sec.photos} />
        </Section>
      ))}

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
