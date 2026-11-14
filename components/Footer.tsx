import Link from "next/link";
import Year from "@/components/Year";
import { container } from "@/components/ui";
import { SITE } from "@/lib/site";

const heading = "mb-4.5 text-[.95rem] uppercase tracking-[.06em] text-navy-800";
// TODO: replace with the company's real profile URLs before publishing
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/REPLACE-ME",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@REPLACE-ME",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const list = "text-[.92rem] *:mb-2.75 [&_a]:text-grey-600 [&_a]:transition-colors [&_a:hover]:text-blue-600";

export default function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-white pt-12 text-grey-600 md:pt-16">
      <div className={container}>
        <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/upec-logo.png" alt="UPEC logo" className="mb-3.5 h-24 w-auto" />
            {/* Same as the navbar company name: Gill Sans caps in brand blue, "Precision" in sky blue */}
            <div className="mb-3.5 font-brand text-[.95rem] leading-[1.3] font-semibold tracking-[.1em] text-brand-blue uppercase">
              United <span className="text-cyan-500">Precision</span>
              <br />
              Engineering Company
            </div>
            <p className="text-[.9rem] text-grey-600">
              Design, engineering, tooling &amp; production solutions for decorative automotive parts.
            </p>
          </div>
          <div>
            <h4 className={heading}>Explore</h4>
            <ul className={list}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/what-we-do">What We Do</Link></li>
              <li><Link href="/our-products">Our Products</Link></li>
              <li><Link href="/media">Media</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>Company</h4>
            <ul className={list}>
              <li><Link href="/about#story">Our Story</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/about#clients">Our Clients</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>Get In Touch</h4>
            <ul className={list}>
              <li><a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a></li>
              <li>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                  E-13, Industrial Area, Yamuna Nagar, 135001
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex gap-2.5" aria-label="UPEC on social media">
              {SOCIALS.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`UPEC on ${label}`}
                    className="flex size-10 items-center justify-center rounded-full border border-grey-200 text-grey-600 transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-grey-200 py-5.5 text-[.82rem] text-grey-600">
          <span>
            &copy; <Year /> United Precision Engineering Company. All rights
            reserved.
          </span>
          <span>An Affiliate of Polyplastics (India)</span>
        </div>
      </div>
    </footer>
  );
}
