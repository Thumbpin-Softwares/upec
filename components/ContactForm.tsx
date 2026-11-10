"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { btn } from "@/components/ui";

const control =
  "w-full rounded-lg border-[1.5px] border-grey-200 bg-grey-100 px-3.75 py-3.25 text-[.95rem] transition-[border-color,background-color] focus:border-cyan-500 focus:bg-white focus:outline-none";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1.75 block text-[.88rem] font-semibold text-navy-800">
        {label}
      </label>
      {children}
    </div>
  );
}

const row = "grid grid-cols-1 gap-4.5 lg:grid-cols-2";

const PURPOSES = {
  inquiry: {
    label: "Inquiry",
    name: "Full Name / Company Name",
    namePlaceholder: "Your name or company",
    message: "Tell us about your parts, timelines and finish requirements",
  },
  career: {
    label: "Career",
    name: "Full Name",
    namePlaceholder: "Your name",
    message: "Tell us about your experience and the role you're interested in",
  },
  supplier: {
    label: "Supplier",
    name: "Company Name",
    namePlaceholder: "Your company",
    message: "Tell us what you supply and the capabilities you offer",
  },
} as const;

type Purpose = keyof typeof PURPOSES;

/**
 * Front-end placeholder until connected to a backend / mail handler.
 * `stacked` keeps every field full-width, for narrow containers like the inquiry drawer.
 */
export default function ContactForm({ stacked }: { stacked?: boolean }) {
  const [sent, setSent] = useState(false);
  const [purpose, setPurpose] = useState<Purpose>("inquiry");
  const copy = PURPOSES[purpose];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setPurpose("inquiry");
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <fieldset className="mb-5">
        <legend className="mb-1.75 block text-[.88rem] font-semibold text-navy-800">Purpose</legend>
        {/* Segmented tabs; real radio inputs so the choice is keyboard-accessible and submitted */}
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-grey-100 p-1">
          {(Object.keys(PURPOSES) as Purpose[]).map((key) => (
            <label key={key} className="cursor-pointer">
              <input
                type="radio"
                name="purpose"
                value={key}
                checked={purpose === key}
                onChange={() => setPurpose(key)}
                className="peer sr-only"
              />
              <span className="block rounded-md px-2 py-2.25 text-center text-[.88rem] font-semibold text-grey-600 transition-colors peer-checked:bg-navy-800 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-500 hover:text-navy-800 peer-checked:hover:text-white">
                {PURPOSES[key].label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field id="name" label={copy.name}>
        <input type="text" id="name" name="name" required placeholder={copy.namePlaceholder} className={control} />
      </Field>
      <div className={stacked ? "" : row}>
        <Field id="email" label="Email">
          <input type="email" id="email" name="email" required placeholder="you@company.com" className={control} />
        </Field>
        <Field id="phone" label="Phone">
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" className={control} />
        </Field>
      </div>
      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={copy.message}
          className={control}
        />
      </Field>
      <button type="submit" className={`${btn("primary")} w-full`}>
        Send Message
      </button>
      {sent && (
        <div id="form-status" className="mt-3.5 text-[.92rem] font-semibold text-[#0f8b52]">
          Thanks! Your message has been noted. Our team will get back to you shortly.
        </div>
      )}
    </form>
  );
}
