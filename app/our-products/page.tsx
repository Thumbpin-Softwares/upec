import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { pageMetadata } from "@/lib/site";
import { projectImage, SEGMENTS, type Project, type Segment } from "@/lib/projects";
import { CtaBanner, Eyebrow, PageHeader, ProductCard, Section, SectionHead, TagCloud } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Our Products: Decorative Automotive Molds",
  description:
    "Molds for every vehicle segment: emblems, front facia, rear and side decoratives, cockpit trims and wheel covers, in high gloss, IMD, 2K and Kromex.",
  path: "/our-products",
  image: "/og/our-products.jpg",
});

/** One project: the open mold, with the part it molds inset in the corner */
function ProjectCard({ name, slug }: Project) {
  return (
    <figure className="reveal group m-0 overflow-hidden rounded-card bg-white ring-1 ring-grey-200 transition-[translate,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-4/3 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={projectImage(slug, "mold")}
          alt={`Injection mold for a ${name.toLowerCase()}`}
          loading="lazy"
          className="size-full object-contain p-3"
        />
        <div className="absolute top-3 right-3 size-18 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-grey-200 md:size-22">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={projectImage(slug, "part")} alt={`${name}, molded part`} loading="lazy" className="size-full object-contain p-1" />
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-grey-200 px-5 py-4">
        <span className="font-semibold text-navy-800">{name}</span>
        <span className="text-[.7rem] font-semibold tracking-[.1em] whitespace-nowrap text-grey-600 uppercase">Mold + Part</span>
      </figcaption>
    </figure>
  );
}

function SegmentSection({ segment, index }: { segment: Segment; index: number }) {
  const { id, title, parts, projects } = segment;
  return (
    <Section id={id} tone={index % 2 ? "white" : "grey"}>
      <div className="reveal mb-8 grid gap-5 md:mb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-12">
        <div>
          <Eyebrow>Segment {String(index + 1).padStart(2, "0")}</Eyebrow>
          <h2 className="mb-0">{title}</h2>
        </div>
        <div>
          <p className="mb-2.5 text-[.72rem] font-semibold tracking-[.12em] text-grey-600 uppercase">Typical parts we tool</p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {parts.map((part) => (
              <li key={part} className="rounded-full border border-grey-200 bg-white px-3.5 py-1.5 text-[.82rem] font-medium text-navy-800">
                {part}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </Section>
  );
}

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
        <SectionHead eyebrow="Vehicle Segment Wise" title="What we tool, segment by segment">
          Pick a segment to see the molds we have built for it.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
          {SEGMENTS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="group block rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500">
              <ProductCard src={s.cover} alt={s.coverAlt} contain title={s.title} />
              <span className="sr-only">: see projects</span>
            </a>
          ))}
        </div>
        <p className="mt-6 mb-0 flex items-center justify-center gap-2 text-[.85rem] text-grey-600">
          <ArrowDown className="size-4 text-cyan-500" />
          {SEGMENTS.reduce((n, s) => n + s.projects.length, 0)} mold projects across {SEGMENTS.length} segments below
        </p>
      </Section>

      {SEGMENTS.map((segment, i) => (
        <SegmentSection key={segment.id} segment={segment} index={i} />
      ))}

      <Section tone={SEGMENTS.length % 2 ? "white" : "grey"}>
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
