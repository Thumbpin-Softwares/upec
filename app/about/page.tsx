import type { Metadata } from "next";
import { ClientStrip, ContactLine, CtaBanner, Eyebrow, PageHeader, Section, SectionHead, Timeline } from "@/components/ui";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, our team and the OEMs who trust UPEC, an affiliate of Polyplastics (India), for decorative automotive tooling since 1996.",
};

const MILESTONES = [
  { year: "April 1996", title: "Start of Operations", text: "Began as a captive tooling setup serving the Polyplastics Group." },
  { year: "April 2012", title: "Independent Profit Center", text: "Transformed into an independent, self-driven profit center." },
  { year: "May 2020", title: "Relocation & Expansion", text: "Moved into new facilities with significantly more area to grow." },
  { year: "March 2022", title: "Capacity Expansion", text: "Scaled up to manufacture 1000T+ decorative part molds." },
  {
    year: "Today",
    title: "Deco Mold Specialist",
    text: "A full-fledged tooling setup focused exclusively on decorative molds, capable of delivering full-vehicle tooling programs.",
  },
];

const VALUES: [string, string, string][][] = [
  [
    ["I", "Integrity", "Being credibly honest to products, solutions and services extended."],
    ["C", "Creativity", "Approach to innovate value-added ideas and solutions."],
    ["R", "Respect", "For knowledge and ideas, more than ranks and positions."],
    ["E", "Evolving", "New thoughts, new processes, new strategies, with undeterred implementation."],
  ],
  [
    ["E", "Excellence", "Consistency in competence to achieve perfection."],
    ["A", "Accountability", "Undeterred responsibility for performance and potential results."],
    ["T", "Teamwork", "Sense of togetherness and support amongst stakeholders, wherever it matters."],
  ],
];

const CLIENTS = [
  "Maruti Suzuki", "Tata Motors", "Renault", "Nissan", "Toyota", "Honda", "Hyundai", "Kia",
  "Ford", "General Motors", "Royal Enfield", "Hero MotoCorp", "Stellantis", "MG Motor", "TAFE", "Bajaj Auto",
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About UPEC"
        crumb="About Us"
        lead="Three decades of disciplined engineering behind India's decorative automotive parts."
        image="/assets/img/photos/shop-floor-edm.jpg"
        leadMaxWidth={600}
      />

      <Section id="story" className="grid grid-cols-1 gap-5 md:gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Our Story</Eyebrow>
          <h2>From a captive tooling cell to a full-fledged deco mold specialist</h2>
          <p>
            United Precision Engineering Company (UPEC) is a proud affiliate of the Polyplastics
            Group, India&apos;s #1 auto deco part maker, with over 50 years of group excellence.
            UPEC&apos;s core competence is providing design, engineering, tooling and production
            solutions for decorative automotive parts.
          </p>
          <p>
            <strong>Vision:</strong> To emerge, sustain and lead as a performance-oriented
            engineering organisation, becoming a world-class engineering setup for ornamental
            automotive/plastics parts.
          </p>
          <p>
            <strong>Mission:</strong> Ensure accomplished delivery of every project, exceeding
            customer expectations, as each project is a step forward to achieving envisioned
            objectives.
          </p>
        </div>
        <div className="reveal">
          <Timeline items={MILESTONES} />
        </div>
      </Section>

      <Section tone="grey">
        <SectionHead eyebrow="Our Values" title="I-CREATE: the principles behind every mold we build" />
        <div className="reveal grid grid-cols-1 gap-5 md:gap-x-15 md:gap-y-0 lg:grid-cols-2">
          {VALUES.map((col, i) => (
            <div key={i}>
              {col.map(([letter, name, text]) => (
                <div className="flex items-start gap-4.5 border-b border-grey-200 py-4.5 last:border-b-0" key={name}>
                  <div className="flex size-11.5 flex-none items-center justify-center rounded-card bg-navy-800 text-[1.2rem] font-bold text-cyan-400">
                    {letter}
                  </div>
                  <div>
                    <h4 className="mb-0.75 text-[1.02rem]">{name}</h4>
                    <p className="m-0 text-[.92rem]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section id="team" className="grid grid-cols-1 items-center gap-5 md:gap-14 lg:grid-cols-2">
        <div className="reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/photos/engineering-team.jpg"
            alt="UPEC's design and engineering team"
            className="rounded-card shadow-md"
          />
        </div>
        <div className="reveal">
          <Eyebrow>Our Team</Eyebrow>
          <h2>170+ people. One blend of experience and fresh engineering talent.</h2>
          <p>
            Our team runs round-the-clock operations across an 8000+ sqm shop floor, combining
            seasoned toolmakers with a new generation of design and CAE engineers trained on
            Hexagon, CATIA, Siemens NX, Autodesk PowerShape, Cadmould, Ansys and Creo.
          </p>
          <div className="mt-6 rounded-card bg-navy-800 p-8.5 text-white">
            <h3 className="text-[1.05rem] text-white">Business Leadership</h3>
            <ContactLine icon={<User />} label="Aseem Kumar">
              <span>Business Head, UPEC</span>
              <br />
              <a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a>
            </ContactLine>
          </div>
        </div>
      </Section>

      <Section id="clients" tone="navy">
        <SectionHead eyebrow="Our Clients" title="Trusted across passenger, commercial & two-wheeler segments">
          Our decorative tooling programs power brand badges, wheel decoratives, facia &amp; module
          decoratives, interior decoratives and accessories for:
        </SectionHead>
        <ClientStrip clients={CLIENTS} />
      </Section>

      <Section>
        <CtaBanner
          title="Want to know how we work?"
          text="See our end-to-end process, from contract review to delivery."
          href="/what-we-do"
          label="What We Do"
        />
      </Section>
    </>
  );
}
