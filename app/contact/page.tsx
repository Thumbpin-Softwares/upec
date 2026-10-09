import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import { PageHeader } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with United Precision Engineering Company, Yamuna Nagar — request a quote for decorative automotive tooling.",
};

function ContactLine({ icon, label, children, last }: { icon: ReactNode; label: string; children: ReactNode; last?: boolean }) {
  return (
    <div className="contact-line" style={last ? { marginBottom: 0 } : undefined}>
      <div className="icon-badge">{icon}</div>
      <div>
        <strong>{label}</strong>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact Us"
        lead="Tell us about your decorative tooling requirement — we'll get back to you quickly."
        image="/assets/img/photos/shop-floor-cnc.jpg"
      />

      <section className="section">
        <div className="container grid grid-2" style={{ gap: 50, alignItems: "flex-start" }}>
          <div className="reveal">
            <div className="eyebrow">Send a Message</div>
            <h2>Request a Quote</h2>
            <ContactForm />
          </div>

          <div className="reveal">
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              <ContactLine icon={<UserIcon />} label="Aseem Kumar">
                <span>Business Head, UPEC</span>
              </ContactLine>
              <ContactLine icon={<PhoneIcon />} label="Phone">
                <a href="tel:+919971697292">+91 99716 97292</a>
              </ContactLine>
              <ContactLine icon={<MailIcon />} label="Email">
                <a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a>
              </ContactLine>
              <ContactLine icon={<PinIcon />} label="Plant Location">
                <span>Yamuna Nagar, Haryana, India</span>
              </ContactLine>
              <ContactLine icon={<ClockIcon />} label="Plant Operations" last>
                <span>Round-the-clock production</span>
              </ContactLine>
            </div>

            <div className="map-embed" style={{ marginTop: 24 }}>
              <iframe
                src="https://maps.google.com/maps?q=Yamuna%20Nagar%2C%20Haryana%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UPEC location — Yamuna Nagar, Haryana"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
