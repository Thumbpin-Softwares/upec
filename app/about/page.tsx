import type { Metadata } from "next";
import { ClientStrip, CtaBanner, PageHeader, SectionHead, Timeline } from "@/components/ui";
import { UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, our team and the OEMs who trust UPEC — an affiliate of Polyplastics (India) — for decorative automotive tooling since 1996.",
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
    ["E", "Evolving", "New thoughts, new processes, new strategies — undeterred implementation."],
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

      <section className="section" id="story">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 56 }}>
            <div className="reveal">
              <div className="eyebrow">Our Story</div>
              <h2>From a captive tooling cell to a full-fledged deco mold specialist</h2>
              <p>
                United Precision Engineering Company (UPEC) is a proud affiliate of the Polyplastics
                Group — India&apos;s #1 auto deco part maker, with over 50 years of group excellence.
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
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="Our Values" title="I-CREATE — the principles behind every mold we build" />
          <div className="grid grid-2 reveal" style={{ gap: "0 60px" }}>
            {VALUES.map((col, i) => (
              <div key={i}>
                {col.map(([letter, name, text]) => (
                  <div className="value-row" key={name}>
                    <div className="value-letter">{letter}</div>
                    <div>
                      <h4>{name}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 56 }}>
          <div className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/photos/engineering-team.jpg"
              alt="UPEC's design and engineering team"
              style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)" }}
            />
          </div>
          <div className="reveal">
            <div className="eyebrow">Our Team</div>
            <h2>170+ people. One blend of experience and fresh engineering talent.</h2>
            <p>
              Our team runs round-the-clock operations across an 8000+ sqm shop floor, combining
              seasoned toolmakers with a new generation of design and CAE engineers trained on
              Hexagon, CATIA, Siemens NX, Autodesk PowerShape, Cadmould, Ansys and Creo.
            </p>
            <div className="contact-info-card" style={{ marginTop: 24 }}>
              <h3 style={{ fontSize: "1.05rem" }}>Business Leadership</h3>
              <div className="contact-line">
                <div className="icon-badge"><UserIcon /></div>
                <div>
                  <strong>Aseem Kumar</strong>
                  <span>Business Head, UPEC</span>
                  <br />
                  <a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy" id="clients">
        <div className="container">
          <SectionHead eyebrow="Our Clients" title="Trusted across passenger, commercial & two-wheeler segments">
            Our decorative tooling programs power brand badges, wheel decoratives, facia &amp; module
            decoratives, interior decoratives and accessories for:
          </SectionHead>
          <ClientStrip clients={CLIENTS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBanner
            title="Want to know how we work?"
            text="See our end-to-end process, from contract review to delivery."
            href="/what-we-do"
            label="What We Do"
          />
        </div>
      </section>
    </>
  );
}
