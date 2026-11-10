import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import InquiryDrawer from "@/components/InquiryDrawer";
import Stats from "@/components/Stats";
import VideoEmbed from "@/components/VideoEmbed";
import { getClientLogos } from "@/lib/images";
import { btn, container, CtaBanner, Eyebrow, LogoGrid, ProductCard, Section, SectionHead } from "@/components/ui";
import { ArrowRight, Boxes, Check, CircleCheckBig, Factory, Layers, Settings, Truck, Users, Weight } from "lucide-react";

const HERO_SLIDES = [
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "CNC machining centres on the UPEC shop floor" },
  { src: "/assets/img/photos/shop-floor-edm.jpg", alt: "EDM machines on the UPEC shop floor" },
  { src: "/assets/img/photos/factory-machine-shop.jpg", alt: "Double-column and VC1000 machining centres in the UPEC machine shop" },
  { src: "/assets/img/photos/factory-cnc-section-1.jpg", alt: "CNC section with machining centres and programming station" },
  { src: "/assets/img/photos/factory-five-axis-vmc.jpg", alt: "Hurco five-axis vertical machining centre" },
  { src: "/assets/img/photos/factory-cnc-section-2.jpg", alt: "Row of CNC machining centres in the tool room" },
  { src: "/assets/img/photos/factory-edm-section.jpg", alt: "Engineers working in the EDM section" },
  { src: "/assets/img/photos/factory-wire-cut.jpg", alt: "Wire-cut EDM machine" },
  { src: "/assets/img/photos/factory-assembly-section.jpg", alt: "Toolmakers assembling molds in the assembly section" },
];

const PROCESS = [
  {
    icon: <Layers />,
    title: "Design & Engineering",
    summary: "Turning part concepts into manufacturable, simulation-backed tool designs.",
    points: ["Concept creation & CAD modelling", "Design optimisation", "Reverse engineering", "CAE & flow simulation"],
  },
  {
    icon: <Settings />,
    title: "Tooling Development",
    summary: "In-house tool build, from feasibility to finished mold.",
    points: ["Tool design & manufacturing feasibility", "Gauges & fixtures", "Full tool manufacturing"],
  },
  {
    icon: <CircleCheckBig />,
    title: "Trials & Quality",
    summary: "Every tool is proven on the press before it ships.",
    points: ["Batch production runs", "Performance testing", "Trials & observation recording", "Corrective action plans"],
  },
  {
    icon: <Truck />,
    title: "Delivery & Support",
    summary: "Transparent tracking right through to delivery readiness.",
    points: ["Weekly progression updates with pictures", "Part submission with reports", "Resolution through delivery readiness and post delivery support"],
  },
];

// Finished parts made from UPEC molds (from the Polyplastics "Products & Customers" slide)
const PRODUCTS = [
  { src: "/assets/img/products/range-badges.webp", alt: "Chrome brand badges and emblems for many car makers", title: "Brand Badges & Emblems" },
  { src: "/assets/img/products/range-grilles.webp", alt: "Chrome and gloss-black front grilles", title: "Grilles & Front Modules" },
  { src: "/assets/img/products/range-wheels.webp", alt: "Decorative wheel covers in several finishes", title: "Wheel Covers & Decorations" },
  { src: "/assets/img/products/range-other.webp", alt: "Chrome and painted decorative trim strips", title: "Other Decoratives" },
];

export default function Home() {
  return (
    <>
      <InquiryDrawer />
      <section className="relative isolate overflow-hidden bg-linear-135 from-navy-900 to-navy-800 text-white">
        {/* Faint engineering grid + glow behind the photo side (same motif as the CTA banner) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/.045)_1px,transparent_1px)] bg-size-[40px_40px] [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
        <div className="absolute -top-32 -right-24 -z-10 size-120 rounded-full bg-cyan-500/15 blur-3xl" />

        <div
          className={`${container} grid items-center gap-10 pt-12 pb-18 sm:pt-16 sm:pb-22 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pt-22 lg:pb-34`}
        >
          <div>
            
            <h1 className="mb-5 text-balance text-white lg:text-[2.9rem] lg:leading-[1.15]">
              Precision Tooling for <span className="text-cyan-400">Decorative Automotive Parts</span>
            </h1>
            <p className="mb-0 max-w-xl text-base text-pretty text-[#c8d6e5] sm:text-[1.05rem]">
              From first design to finished mold, we build the tooling behind decorative parts for
              leading global OEMs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Link href="/what-we-do" className={`${btn("primary")} group`}>
                Explore Products
                <ArrowRight className="size-4 transition-[translate] group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className={btn("outline")}>
                Get In Touch
              </Link>
            </div>
          </div>
          <HeroCarousel slides={HERO_SLIDES} />
        </div>
      </section>

      <div className={container}>
        <Stats
          stats={[
            { count: 170, suffix: "+", label: "Team Members", icon: <Users /> },
            { count: 8000, suffix: "+", label: "Sqm Facility Area", icon: <Factory /> },
            { count: 4000, suffix: "+", label: "Molds Delivered", icon: <Boxes /> },
            { count: 10000, suffix: "Kg", label: "Max Lift Capacity", icon: <Weight /> },
          ]}
        />
      </div>

      <Section className="grid grid-cols-1 items-center gap-5 md:gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>About UPEC</Eyebrow>
          <h2>30 years of precision, one focus: decorative automotive tooling</h2>
          <p>
            Started in April 1996 as a captive tooling setup for the Polyplastics Group (India&apos;s
            #1 auto deco part maker), UPEC transformed into an independent profit center in 2012 and
            relocated to a larger, purpose-built facility in 2020. Today, we run a full-fledged
            tooling operation exclusively focused on decorative molds, backed by round-the-clock
            production and a 170+ strong team of experienced and emerging engineers.
          </p>
          <p>
            Our core competence lies in providing design, engineering, tooling and production
            solutions for decorative automotive parts, from ID decals and badges to facia, cockpit
            and wheel decoratives.
          </p>
          <Link href="/about" className={`${btn("dark")} max-md:mx-auto max-md:flex max-md:w-fit`}>
            Read Our Full Story
          </Link>
        </div>
        <VideoEmbed id="GekU2WH7bgs" title="UPEC corporate film" poster="/assets/img/photos/engineering-team.jpg" autoplay />
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="What We Do" title="End-to-end tooling delivery, one disciplined process">
          From contract review to part submission, every project runs through a controlled,
          weekly-tracked process engineered to exceed customer expectations.
        </SectionHead>
        <ol className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Desktop: one rail linking the four step markers */}
          <span aria-hidden="true" className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-grey-400/50 lg:block" />
          {PROCESS.map((step, i) => (
            <li key={step.title} className="reveal group flex flex-col">
              <span className="relative z-1 mx-auto mb-6 hidden size-12 items-center justify-center rounded-full bg-navy-800 text-cyan-400 ring-6 ring-grey-100 transition-colors duration-200 group-hover:bg-cyan-500 group-hover:text-navy-900 lg:flex [&_svg]:size-5 [&_svg]:stroke-[1.75]">
                {step.icon}
              </span>
              <div className="flex flex-1 flex-col rounded-card bg-white p-6 ring-1 ring-grey-200 transition-[translate,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-md md:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 flex-none items-center justify-center rounded-full bg-grey-100 text-navy-800 lg:hidden [&_svg]:size-5 [&_svg]:stroke-[1.75]">
                    {step.icon}
                  </span>
                  <span className="text-[.72rem] font-semibold tracking-[.14em] text-cyan-500 uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 text-[1.2rem]">{step.title}</h3>
                <p className="mb-5 text-[.92rem] text-grey-600">{step.summary}</p>
                <ul className="space-y-2 border-t border-grey-200 pt-5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[.88rem] leading-snug text-ink">
                      <Check className="mt-0.5 size-3.5 flex-none text-cyan-500" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-9 text-center">
          <Link href="/what-we-do" className={btn("dark")}>See Our Full Process</Link>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead eyebrow="Our Products" title="Decorative tooling, by category">
          Specialized tool maker for high-gloss, high-aesthetics decorative automotive parts,
          including 2K, IMD, Illumination &amp; Kromex technologies.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.title} {...p} titleClassName="text-[1.02rem]" />
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/our-products" className={btn("primary")}>View All Products</Link>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Trusted By" title="Powering decorative programs for leading OEMs" />
        <LogoGrid logos={getClientLogos()} />
      </Section>

      <Section>
        <CtaBanner
          title="Have a tooling program in hand?"
          text="Let's talk about your parts, timelines and finish requirements."
          href="/contact"
          label="Contact our team"
        />
      </Section>
    </>
  );
}
