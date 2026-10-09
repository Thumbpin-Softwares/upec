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

// Front-end placeholder until connected to a backend / mail handler
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className={row}>
        <Field id="name" label="Full Name">
          <input type="text" id="name" name="name" required placeholder="Your name" className={control} />
        </Field>
        <Field id="company" label="Company">
          <input type="text" id="company" name="company" placeholder="Your company" className={control} />
        </Field>
      </div>
      <div className={row}>
        <Field id="email" label="Email">
          <input type="email" id="email" name="email" required placeholder="you@company.com" className={control} />
        </Field>
        <Field id="phone" label="Phone">
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" className={control} />
        </Field>
      </div>
      <Field id="subject" label="Subject">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="e.g. New Tooling Program Enquiry"
          className={control}
        />
      </Field>
      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your parts, timelines and finish requirements"
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
