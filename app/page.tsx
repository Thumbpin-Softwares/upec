import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import InquiryDrawer from "@/components/InquiryDrawer";
import Stats from "@/components/Stats";
import { CLIENT_LOGOS } from "@/lib/logos";
import { btn, cardSurface, container, CtaBanner, Eyebrow, IconBadge, LogoGrid, ProductCard, Section, SectionHead } from "@/components/ui";
import { Boxes, Check, CircleCheckBig, Factory, Layers, Settings, Truck, Users, Weight } from "lucide-react";

const HERO_IMAGES = [
  "/assets/img/photos/shop-floor-cnc.jpg",
  "/assets/img/photos/shop-floor-edm.jpg",
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
      <section
        className="relative flex items-center overflow-hidden bg-navy-900 pt-16 pb-20 text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_82%_20%,rgba(23,179,217,.25),transparent_45%)] sm:pt-20 sm:pb-24 md:min-h-160 md:py-0"
      >
        <HeroCarousel images={HERO_IMAGES} />
        <div className="relative z-2 w-full px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-1.5 text-base font-medium text-cyan-400 sm:text-[1.15rem]">Passionate Performance!</div>
            <h1 className="text-balance text-white">Precision Tooling for Decorative Automotive Parts</h1>
            <p className="mx-auto max-w-2xl text-base text-pretty text-[#d7e5f2] sm:text-lg">
              An affiliate of Polyplastics (India), with 30 years of engineering excellence in design,
              tooling and production of high-gloss, IMD, 2K &amp; Kromex decorative components for
              leading global OEMs.
            </p>
            <div className="mt-7.5 flex flex-wrap justify-center gap-3.5 max-md:mx-auto max-md:max-w-xs max-md:flex-col max-md:items-stretch">
              <Link href="/what-we-do" className={`${btn("primary")} max-md:whitespace-normal`}>
                Explore Products
              </Link>
              <Link href="/contact" className={`${btn("outline")} max-md:whitespace-normal`}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={container}>
        <Stats
          stats={[
            { count: 170, suffix: "+", label: "Team Members", icon: <Users /> },
            { count: 8000, suffix: "+", label: "Sqm Facility Area", icon: <Factory /> },
            { count: 4000, suffix: "+", label: "Molds Delivered", icon: <Boxes /> },
            { text: "10000 Kg", label: "Max Lift Capacity", icon: <Weight /> },
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

      <Section>
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
          <Link href="/our-products" className={btn("dark")}>View All Products</Link>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Trusted By" title="Powering decorative programs for leading OEMs" />
        <LogoGrid logos={CLIENT_LOGOS} />
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
