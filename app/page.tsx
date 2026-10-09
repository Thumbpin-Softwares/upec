import Link from "next/link";
import Stats from "@/components/Stats";
import { Card, ClientStrip, CtaBanner, SectionHead } from "@/components/ui";
import { CheckCircleIcon, GearIcon, LayersIcon, TruckIcon } from "@/components/icons";

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
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(6,26,51,.94), rgba(10,44,84,.85)), url('/assets/img/photos/shop-floor-cnc.jpg')",
        }}
      >
        <div className="container hero-inner">
          <div className="hero-tagline">Passionate Performance!</div>
          <h1>Precision Tooling for Decorative Automotive Parts</h1>
          <p className="lead">
            An affiliate of Polyplastics (India) — 30 years of engineering excellence in design,
            tooling and production of high-gloss, IMD, 2K &amp; Kromex decorative components for
            leading global OEMs.
          </p>
          <div className="hero-actions">
            <Link href="/what-we-do" className="btn btn-primary">Explore Our Capabilities</Link>
            <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      <div className="container">
        <Stats
          stats={[
            { count: 170, suffix: "+", label: "Team Members" },
            { count: 8000, suffix: "+", label: "Sqm Shop Area" },
            { count: 4000, suffix: "+", label: "Molds Delivered" },
            { text: "30T–1300T", label: "Press Size Capability" },
          ]}
        />
      </div>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 56 }}>
          <div className="reveal">
            <div className="eyebrow">About UPEC</div>
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
            <Link href="/about" className="btn btn-dark">Read Our Full Story</Link>
          </div>
          <div className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/photos/engineering-team.jpg"
              alt="UPEC design and engineering team at work"
              style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)" }}
            />
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="What We Do" title="End-to-end tooling delivery, one disciplined process">
            From contract review to part submission, every project runs through a controlled,
            weekly-tracked process engineered to exceed customer expectations.
          </SectionHead>
          <div className="grid grid-4">
            <Card icon={<LayersIcon />} title="Design & Engineering">
              Concept creation, CAD modelling, design optimisation, reverse engineering and CAE / flow
              simulation.
            </Card>
            <Card icon={<GearIcon />} title="Tooling Development">
              Tool design, manufacturing feasibility, gauges &amp; fixtures, and full tool
              manufacturing on 30T&ndash;1300T presses.
            </Card>
            <Card icon={<CheckCircleIcon />} title="Trials & Quality">
              Batch production, performance testing, trials, observation recording and corrective
              action plans.
            </Card>
            <Card icon={<TruckIcon />} title="Delivery & Support">
              Weekly progression updates, part submission with reports, and resolution through
              delivery readiness.
            </Card>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/what-we-do" className="btn btn-dark">See Our Full Process</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Products" title="Decorative tooling, by category">
            Specialised in Hi-Gloss, IMD, 2K and Kromex finishes across every visible surface of the
            vehicle.
          </SectionHead>
          <div className="grid grid-4">
            {PRODUCTS.map((p) => (
              <div className="product-card reveal" key={p.title}>
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} />
                </div>
                <div className="body">
                  <h3 style={{ fontSize: "1.02rem" }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/our-products" className="btn btn-dark">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Trusted By" title="Powering decorative programs for leading OEMs" />
          <ClientStrip clients={CLIENTS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBanner
            title="Have a decorative tooling program in mind?"
            text="Let's talk about your parts, timelines and finish requirements."
            href="/contact"
            label="Contact Our Team"
          />
        </div>
      </section>
    </>
  );
}
