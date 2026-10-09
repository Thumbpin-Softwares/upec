"use client";

import { useState, type FormEvent } from "react";

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
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Your company" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@company.com" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="e.g. New Tooling Program Enquiry" />
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your parts, timelines and finish requirements"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Send Message
      </button>
      <div id="form-status" className={sent ? "ok" : undefined}>
        {sent && "Thanks! Your message has been noted — our team will get back to you shortly."}
      </div>
    </form>
  );
}
