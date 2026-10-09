import Link from "next/link";
import Year from "@/components/Year";
import { container } from "@/components/ui";

const heading = "mb-4.5 text-[.95rem] uppercase tracking-[.06em] text-white";
const list = "*:mb-2.75 [&_a]:text-[.92rem] [&_a]:text-[#a9bbcd] [&_a:hover]:text-cyan-400";

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-12 text-[#a9bbcd] md:pt-16">
      <div className={container}>
        <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/upec-logo.png" alt="UPEC logo" className="mb-3.5 h-9.5 w-auto" />
            <p className="text-[.9rem] text-[#93a7bb]">
              United Precision Engineering Company, an affiliate of Polyplastics (India). Design,
              engineering, tooling &amp; production solutions for decorative automotive parts.
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
              <li><a href="tel:+919971697292">+91 99716 97292</a></li>
              <li><a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a></li>
              <li>Unit- E13, Industrial Area, Yamuna Nagar, 135001</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/8 py-5.5 text-[.82rem] text-[#6f829a]">
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
