import Link from "next/link";
import Stats from "@/components/Stats";
import { btn, Card, ClientStrip, container, CtaBanner, Eyebrow, ProductCard, Section, SectionHead } from "@/components/ui";
import { CircleCheckBig, Layers, Settings, Truck } from "lucide-react";

const PRODUCTS = [
  { src: "/assets/img/products/grille-assembly-parts.jpg", alt: "ID decals and badge tooling", title: "ID Decals & Badges" },
  { src: "/assets/img/products/facia-grille-exploded.jpg", alt: "Front facia decoratives tooling", title: "Front Facia Decoratives" },
  { src: "/assets/img/products/wheel-cover-mold.jpg", alt: "Wheel cover decorative mold", title: "Wheel Decoratives" },
  { src: "/assets/img/products/bumper-reinforcement.jpg", alt: "Bumper and exterior module decoratives", title: "Exterior Module Decoratives" },
];

const CLIENTS = [
  "Maruti Suzuki", "Tata Motors", "Renault", "Nissan", "Toyota", "Honda",
  "Hyundai", "Kia", "Ford", "Royal Enfield", "Hero MotoCorp", "Stellantis",
];

export default function Home() {
  return (
    <>
      <section
        className="relative flex items-center overflow-hidden bg-navy-900 bg-cover bg-center pt-29.5 pb-17 text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_82%_20%,rgba(23,179,217,.25),transparent_45%)] sm:pt-32.5 sm:pb-19 md:min-h-160 md:py-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(6,26,51,.94), rgba(10,44,84,.85)), url('/assets/img/photos/shop-floor-cnc.jpg')",
        }}
      >
        <div className={`${container} relative z-2 max-w-170`}>
          <div className="mb-1.5 text-[1.15rem] text-cyan-400 italic">Passionate Performance!</div>
          <h1 className="text-white">Precision Tooling for Decorative Automotive Parts</h1>
          <p className="max-w-140 text-[1.12rem] text-[#d7e5f2]">
            An affiliate of Polyplastics (India) — 30 years of engineering excellence in design,
            tooling and production of high-gloss, IMD, 2K &amp; Kromex decorative components for
            leading global OEMs.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-3.5 max-md:flex-col max-md:items-stretch">
            <Link href="/what-we-do" className={`${btn("primary")} max-md:whitespace-normal`}>
              Explore Our Capabilities
            </Link>
            <Link href="/contact" className={`${btn("outline")} max-md:whitespace-normal`}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <div className={container}>
        <Stats
          stats={[
            { count: 170, suffix: "+", label: "Team Members" },
            { count: 8000, suffix: "+", label: "Sqm Shop Area" },
            { count: 4000, suffix: "+", label: "Molds Delivered" },
            { text: "30T–1300T", label: "Press Size Capability" },
          ]}
        />
      </div>

      <Section className="grid grid-cols-1 items-center gap-5 md:gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>About UPEC</Eyebrow>
          <h2>30 years of precision, one focus: decorative automotive tooling</h2>
          <p>
            Started in April 1996 as a captive tooling setup for the Polyplastics Group — India&apos;s
            #1 auto deco part maker — UPEC transformed into an independent profit center in 2012 and
            relocated to a larger, purpose-built facility in 2020. Today, we run a full-fledged
            tooling operation exclusively focused on decorative molds, backed by round-the-clock
            production and a 170+ strong team of experienced and emerging engineers.
          </p>
          <p>
            Our core competence lies in providing design, engineering, tooling and production
            solutions for decorative automotive parts — from ID decals and badges to facia, cockpit
            and wheel decoratives.
          </p>
          <Link href="/about" className={btn("dark")}>Read Our Full Story</Link>
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
          <Card icon={<Layers />} title="Design & Engineering">
            Concept creation, CAD modelling, design optimisation, reverse engineering and CAE / flow
            simulation.
          </Card>
          <Card icon={<Settings />} title="Tooling Development">
            Tool design, manufacturing feasibility, gauges &amp; fixtures, and full tool
            manufacturing on 30T&ndash;1300T presses.
          </Card>
          <Card icon={<CircleCheckBig />} title="Trials & Quality">
            Batch production, performance testing, trials, observation recording and corrective
            action plans.
          </Card>
          <Card icon={<Truck />} title="Delivery & Support">
            Weekly progression updates, part submission with reports, and resolution through
            delivery readiness.
          </Card>
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
        <ClientStrip clients={CLIENTS} />
      </Section>

      <Section>
        <CtaBanner
          title="Have a decorative tooling program in mind?"
          text="Let's talk about your parts, timelines and finish requirements."
          href="/contact"
          label="Contact Our Team"
        />
      </Section>
    </>
  );
}
