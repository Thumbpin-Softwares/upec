import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ContactLine, Eyebrow, PageHeader, Section } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with United Precision Engineering Company, Yamuna Nagar — request a quote for decorative automotive tooling.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact Us"
        lead="Tell us about your decorative tooling requirement — we'll get back to you quickly."
        image="/assets/img/photos/shop-floor-cnc.jpg"
      />

      <Section className="grid grid-cols-1 items-start gap-5 md:gap-12.5 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Send a Message</Eyebrow>
          <h2>Request a Quote</h2>
          <ContactForm />
        </div>

        <div className="reveal">
          <div className="rounded-card bg-navy-800 p-8.5 text-white">
            <h3 className="text-white">Get In Touch</h3>
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

          <div className="mt-6 overflow-hidden rounded-card border border-grey-200">
            <iframe
              src="https://maps.google.com/maps?q=Yamuna%20Nagar%2C%20Haryana%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UPEC location — Yamuna Nagar, Haryana"
              className="block h-65 w-full border-0 md:h-85"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
