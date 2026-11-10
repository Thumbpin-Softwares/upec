import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import InquiryDrawer from "@/components/InquiryDrawer";
import Stats from "@/components/Stats";
import { getClientLogos } from "@/lib/images";
import { btn, cardSurface, container, CtaBanner, Eyebrow, IconBadge, LogoGrid, ProductCard, Section, SectionHead } from "@/components/ui";
import { ArrowRight, Boxes, Check, CircleCheckBig, Factory, Layers, Settings, Truck, Users, Weight } from "lucide-react";

const HERO_SLIDES = [
  { src: "/assets/img/photos/shop-floor-cnc.jpg", alt: "CNC machining centres on the UPEC shop floor" },
  { src: "/assets/img/photos/shop-floor-edm.jpg", alt: "EDM machines on the UPEC shop floor" },
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
    points: ["Weekly progression updates with pictures", "Part submission with reports", "resolution through delivery readiness and post delivery support"],
  },
];

const PRODUCTS = [
  { src: "/assets/img/products/badge-decalls.jpg", alt: "Chrome Renault and Kwid badges", contain: true, title: "ID Decals & Badges" },
  { src: "/assets/img/products/front-grill.avif", alt: "Gloss black front grille", title: "Front Facia Decoratives" },
  { src: "/assets/img/products/wheeldecorative.avif", alt: "Silver multi-spoke decorative wheel", title: "Wheel Decoratives" },
  { src: "/assets/img/products/footsetp.avif", alt: "Aluminium side footsteps (running boards)", title: "Exterior Module Decoratives" },
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
        <div className="reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/photos/engineering-team.jpg"
            alt="UPEC design and engineering team at work"
            className="rounded-card shadow-md"
          />
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="What We Do" title="End-to-end tooling delivery, one disciplined process">
          From contract review to part submission, every project runs through a controlled,
          weekly-tracked process engineered to exceed customer expectations.
        </SectionHead>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {PROCESS.map((step, i) => (
            <div key={step.title} className={`reveal relative ${cardSurface} p-7 md:p-9`}>
              <span className="absolute top-6 right-7 text-4xl font-bold text-grey-200 md:top-8 md:right-9 md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <IconBadge>{step.icon}</IconBadge>
              <h3 className="mt-5 mb-2 text-[1.35rem]">{step.title}</h3>
              <p className="mb-5 text-[.95rem]">{step.summary}</p>
              <ul className="space-y-2.5 border-t border-grey-200 pt-5">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[.95rem] text-ink">
                    <Check className="mt-1 size-4 flex-none text-cyan-500" strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/what-we-do" className={btn("dark")}>See Our Full Process</Link>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead eyebrow="Our Products" title="Decorative tooling, by category">
          Specialised in Hi-Gloss, IMD, 2K and Kromex finishes across every visible surface of the
          vehicle.
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
