import type { Metadata } from "next";
import { CtaBanner, Eyebrow, LogoGrid, PageHeader, Section, SectionHead, Timeline } from "@/components/ui";
import { CLIENT_LOGOS } from "@/lib/logos";

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

// Order spells I-C-R-E-A-T-E down the list
const VALUES: [string, string, string][] = [
  ["I", "Integrity", "Being credibly honest to products, solutions and services extended."],
  ["C", "Creativity", "Approach to innovate value-added ideas and solutions."],
  ["R", "Respect", "For knowledge and ideas, more than ranks and positions."],
  ["E", "Evolving", "New thoughts, new processes, new strategies, with undeterred implementation."],
  ["A", "Accountability", "Undeterred responsibility for performance and potential results."],
  ["T", "Teamwork", "Sense of togetherness and support amongst stakeholders, wherever it matters."],
  ["E", "Excellence", "Consistency in competence to achieve perfection."],
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
        <ul className="reveal mx-auto max-w-3xl">
          {VALUES.map(([letter, name, text]) => (
            <li
              key={name}
              className="grid grid-cols-[3.5rem_1fr] items-center gap-5 border-b border-grey-200 py-6 last:border-b-0 md:grid-cols-[6rem_1fr] md:gap-8 md:py-7"
            >
              <span className="text-center text-6xl leading-none font-bold text-navy-800 md:text-8xl" aria-hidden="true">
                {letter}
              </span>
              <div>
                <h4 className="mb-1 text-[1.15rem] md:text-[1.3rem]">{name}</h4>
                <p className="m-0 text-[.95rem] md:text-base">{text}</p>
              </div>
            </li>
          ))}
        </ul>
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
            Our team runs round-the-clock operations across an 8000+ sqm shop floor, combining seasoned toolmakers with a new generation of design, CAE engineers and state of the machine and equipments.
          </p>
        </div>
      </Section>

      <Section id="clients" tone="grey">
        <SectionHead eyebrow="Trusted By" title="Trusted across passenger, commercial & two-wheeler segments">
          Our decorative tooling programs power brand badges, wheel decoratives, facia &amp; module
          decoratives, interior decoratives and accessories for:
        </SectionHead>
        <LogoGrid logos={CLIENT_LOGOS} />
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
