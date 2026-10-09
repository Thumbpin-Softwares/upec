import type { Metadata } from "next";
import { Card, CtaBanner, PageHeader, SectionHead, TagCloud, Timeline } from "@/components/ui";
import { CarIcon, LinkIcon, LockIcon, WheelIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Our process, engineering capabilities and the OEMs and Tier-1s we work for — decorative automotive tooling from concept to delivery.",
};

const PROCESS = [
  { title: "Order Confirmation & Contract Review", text: "Formal sign-off before any engineering work begins." },
  { title: "Input Review & Feasibility Check", text: "Adequacy check, feasibility check and resolution of open points." },
  { title: "Project Master Schedule", text: "Generated and distributed to all stakeholders." },
  { title: "Product Engineering & CAD", text: "CAD generation, design reviews, corrections and approvals." },
  { title: "Tooling Development", text: "Activity planning and weekly progression reviews." },
  { title: "Customer Updates", text: "Weekly progression updates shared with pictures." },
  { title: "Trials & Testing", text: "Trials, testing and observation recording." },
  { title: "Submission & Delivery", text: "Part submission with reports, corrective action plans, and delivery readiness." },
];

const CAPABILITIES = [
  "Concept Creation", "Engineering Feasibility", "CAD Modelling", "Design Optimisation",
  "Reverse Engineering", "CAE Simulation", "Prototype Development", "Performance Testing",
  "Tool Design", "Manufacturing Feasibility", "Flow Simulation", "EP Simulation",
  "Batch Production", "Finishing Operations", "Gauges & Fixtures", "Assembly Fixtures",
  "Process Evolution", "Tool Manufacturing",
];

export default function WhatWeDo() {
  return (
    <>
      <PageHeader
        title="What We Do"
        crumb="What We Do"
        lead="A controlled, weekly-tracked process — from contract review to delivery readiness — built around decorative tooling."
        image="/assets/img/products/mold-tool-progression.jpg"
      />

      <section className="section" id="process">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 56 }}>
            <div className="reveal">
              <div className="eyebrow">Our Process</div>
              <h2>Project control, step by step</h2>
              <p>
                Every tooling program at UPEC runs through the same disciplined pipeline — reviewed
                weekly and shared transparently with the customer.
              </p>
            </div>
            <div className="reveal">
              <Timeline items={PROCESS} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Engineering Capabilities" title="Concept to tool manufacturing — in-house">
            Supported by Hexagon, Visi, CATIA, Siemens NX, Autodesk PowerShape/AutoCAD, Elsyca,
            Cadmould, Ansys and Creo.
          </SectionHead>
          <TagCloud tags={CAPABILITIES} />
        </div>
      </section>

      <section className="section" id="who-we-work-for">
        <div className="container">
          <SectionHead eyebrow="Who We Work For" title="OEMs and Tier-1s building the vehicles you see on the road">
            We partner with passenger vehicle, two-wheeler and commercial vehicle manufacturers across
            every decorative touchpoint of the vehicle.
          </SectionHead>
          <div className="grid grid-4">
            <Card icon={<CarIcon />} title="Passenger Vehicle OEMs">
              Front &amp; rear facia, door and cockpit decoratives for global car brands.
            </Card>
            <Card icon={<WheelIcon />} title="Two-Wheeler Manufacturers">
              Wheel covers, badges and decorative accessories in motion.
            </Card>
            <Card icon={<LinkIcon />} title="Tier-1 Suppliers">
              Sub-tier tooling and mold manufacturing partnerships across programs.
            </Card>
            <Card icon={<LockIcon />} title="Commercial & Farm Vehicles">
              Emblems and decorative badging for commercial and agricultural equipment brands.
            </Card>
          </div>
          <div className="grid grid-2 reveal" style={{ marginTop: 40, gap: 24 }}>
            <div className="card" style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: 4 }}>30T &ndash; 1300T</h3>
              <p>Press size capability, with max lift capacity of 10,000 kg</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: 4 }}>Hi-Gloss &middot; IMD &middot; 2K &middot; Kromex</h3>
              <p>Specialised decorative finish technologies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <CtaBanner
            title="See what we've built"
            text="Browse decorative tooling programs delivered for Renault, Nissan, Maruti Suzuki and more."
            href="/our-products"
            label="View Our Products"
            style={{ background: "linear-gradient(120deg, var(--navy-900), var(--navy-700))" }}
          />
        </div>
      </section>
    </>
  );
}
