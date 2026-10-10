import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow, PageHeader, Section } from "@/components/ui";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with United Precision Engineering Company, Yamuna Nagar. Request a quote for decorative automotive tooling.",
};

const iconBox =
  "flex size-10 flex-none items-center justify-center rounded-md bg-white/6 text-cyan-400 [&_svg]:size-4.5";
const labelCls = "text-[.7rem] font-semibold tracking-[.12em] text-[#7f93a8] uppercase";

function ContactAction({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 border-b border-white/8 px-7 py-4 transition-colors last:border-b-0 hover:bg-white/4 focus-visible:bg-white/4 focus-visible:outline-none md:px-8"
    >
      <span className={iconBox}>{icon}</span>
      <span className="min-w-0 flex-1">
        <span className={`block ${labelCls}`}>{label}</span>
        <span className="block truncate font-medium text-white">{value}</span>
      </span>
      <ArrowUpRight className="size-4 flex-none text-cyan-400 opacity-0 transition-[opacity,translate] group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100" />
    </a>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact Us"
        lead="Tell us about your decorative tooling requirement and we'll get back to you quickly."
        image="/assets/img/photos/shop-floor-cnc.jpg"
      />

      <Section className="grid grid-cols-1 items-start gap-5 md:gap-12.5 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Send a Message</Eyebrow>
          <h2>Request a Quote</h2>
          <ContactForm />
        </div>

        <div className="reveal">
          <div className="relative isolate overflow-hidden rounded-md bg-navy-900 text-white">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-cyan-500 via-cyan-500/40 to-transparent" />
            <div className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-cyan-500/15 blur-3xl" />

            <div className="px-7 pt-7 pb-5 md:px-8">
              <h3 className="mb-0 text-xs font-semibold tracking-[.14em] text-cyan-400 uppercase">Get In Touch</h3>
            </div>

            <div className="border-t border-white/8">
              <ContactAction href="tel:+919971697292" icon={<Phone />} label="Phone" value="+91 99716 97292" />
              <ContactAction href="mailto:COO@UPEC.co.in" icon={<Mail />} label="Email" value="COO@UPEC.co.in" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-card border border-grey-200">
            <iframe
              src="https://maps.google.com/maps?q=Yamuna%20Nagar%2C%20Haryana%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UPEC location: Yamuna Nagar, Haryana"
              className="block h-65 w-full border-0 md:h-85"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
