"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Must match the CSS media query that switches .nav to the off-canvas panel (see globals.css)
const MOBILE_NAV_BP = 1200;

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about#story", label: "Our Story" },
      { href: "/about#team", label: "Our Team" },
      { href: "/about#clients", label: "Our Clients" },
    ],
  },
  {
    href: "/what-we-do",
    label: "What We Do",
    children: [
      { href: "/what-we-do#process", label: "Our Process" },
      { href: "/what-we-do#who-we-work-for", label: "Who We Work For" },
    ],
  },
  {
    href: "/our-products",
    label: "Our Products",
    children: [
      { href: "/our-products#industry-wise", label: "Industry Wise" },
      { href: "/our-products#final-products", label: "Final Products" },
    ],
  },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
];

const isMobileNav = () => window.innerWidth <= MOBILE_NAV_BP;

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  const closeMobileNav = () => {
    if (!isMobileNav()) return;
    setNavOpen(false);
    setOpenItem(null);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/upec-logo.png" alt="UPEC logo" />
        </Link>
        <button
          className={`nav-toggle${navOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav${navOpen ? " open" : ""}`}>
          {NAV.map((item) => {
            const classes = [
              pathname === item.href ? "active" : "",
              openItem === item.href ? "open" : "",
            ].filter(Boolean);
            return (
              <li key={item.href} className={classes.join(" ") || undefined}>
                <Link
                  href={item.href}
                  className={item.href === "/" ? "top-link" : undefined}
                  onClick={(e) => {
                    if (item.children && isMobileNav()) {
                      e.preventDefault();
                      setOpenItem((cur) => (cur === item.href ? null : item.href));
                    } else {
                      closeMobileNav();
                    }
                  }}
                >
                  {item.label}
                  {item.children && <>{" "}<span className="caret">▾</span></>}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeMobileNav}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
          <li className="nav-cta">
            <Link href="/contact" className="btn btn-primary" onClick={closeMobileNav}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
