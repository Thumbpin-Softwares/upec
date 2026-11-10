"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { container } from "@/components/ui";

// Must match the `xl` breakpoint below which the nav becomes the off-canvas panel (see globals.css)
const MOBILE_NAV_BP = 1200;

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
  /** Rendered as a filled button on the desktop bar */
  cta?: boolean;
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
  { href: "/our-products", label: "Our Products" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us", cta: true },
];

const isMobileNav = () => window.innerWidth <= MOBILE_NAV_BP;

const bar = "h-0.5 w-6 rounded-xs bg-navy-900 transition-[translate,rotate,opacity]";

// Mobile: full-width rows in the off-canvas panel (shared by every item)
const linkBase =
  "flex items-center justify-between gap-1.25 border-b border-grey-200 px-1.5 py-4 text-[.95rem] font-medium transition-colors xl:justify-start xl:border-b-0 xl:text-[.9rem]";

// Desktop: full-height tab with an underline that sits on the header's bottom edge
const linkTab =
  "hover:text-blue-600 xl:relative xl:h-20 xl:px-3.5 xl:py-0 xl:after:absolute xl:after:inset-x-3.5 xl:after:-bottom-px xl:after:h-0.5 xl:after:origin-left xl:after:rounded-full xl:after:bg-cyan-500 xl:after:transition-transform xl:after:duration-200 xl:hover:after:scale-x-100 xl:group-focus-within:after:scale-x-100";

const linkCta =
  "hover:text-blue-600 xl:rounded-md xl:bg-navy-800 xl:px-5 xl:py-2.5 xl:font-semibold xl:text-white xl:shadow-sm xl:transition-[background-color,box-shadow] xl:hover:bg-navy-700 xl:hover:text-white xl:hover:shadow-md";

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
    // No backdrop-filter here: it makes this sticky header a containing block for
    // position:fixed descendants (the mobile nav panel), breaking its top/bottom
    // sizing against the viewport. Background is opaque, so a blur wouldn't show anyway.
    <header className="sticky top-0 z-999 border-b border-grey-200 bg-white">
      <div className={`${container} flex h-20 items-center justify-between gap-3 max-xs:px-4`}>
        <Link href="/" className="flex min-w-0 items-center gap-2.5 xs:gap-3.5" aria-label="United Precision Engineering Company, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/upec-logo.png" alt="" className="h-[clamp(2.125rem,11vw,2.5rem)] w-auto flex-none xs:h-12 xl:h-14" />
          {/* Two lines so the full name fits beside the desktop nav and on narrow phones */}
          <span className="border-l border-grey-400 pl-2.5 font-brand text-[clamp(.56rem,2.8vw,.72rem)] leading-[1.3] font-semibold tracking-[.04em] whitespace-nowrap text-brand-blue uppercase xs:pl-3.5 xs:text-[.8rem] xs:tracking-[.1em] sm:text-[.95rem]">
            United Precision
            <br />
            Engineering Company
          </span>
        </Link>
        <button
          className="flex min-h-11 min-w-11 flex-none cursor-pointer flex-col items-center justify-center gap-1.25 border-0 bg-transparent p-2 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className={`${bar} ${navOpen ? "translate-y-1.75 rotate-45" : ""}`}></span>
          <span className={`${bar} ${navOpen ? "opacity-0" : ""}`}></span>
          <span className={`${bar} ${navOpen ? "-translate-y-1.75 -rotate-45" : ""}`}></span>
        </button>
        <ul
          className={`fixed inset-x-0 top-20 bottom-0 flex flex-col items-stretch gap-1 overflow-y-auto bg-white p-5 transition-[translate] xl:static xl:flex-none xl:flex-row xl:items-center xl:gap-0 xl:overflow-visible xl:bg-transparent xl:p-0 xl:translate-x-0 xl:transition-none ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            const open = openItem === item.href;
            return (
              <li key={item.href} className={`group relative ${item.cta ? "xl:ml-3" : ""}`}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} ${item.cta ? linkCta : linkTab} ${
                    active ? "text-blue-600 xl:after:scale-x-100" : "text-navy-900 xl:after:scale-x-0"
                  }`}
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
                  {item.children && (
                    <ChevronDown className="mt-0.5 size-3.5 opacity-70 transition-[rotate] xl:group-focus-within:rotate-180 xl:group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div
                    className={`mb-2 rounded-card bg-grey-100 p-2.5 xl:invisible xl:absolute xl:top-full xl:left-2 xl:mb-0 xl:block xl:min-w-56 xl:translate-y-1 xl:rounded-none xl:rounded-b-md xl:border xl:border-t-2 xl:border-grey-200 xl:border-t-cyan-500 xl:bg-white xl:px-0 xl:py-2 xl:opacity-0 xl:shadow-[0_12px_32px_rgb(6_26_51/0.12)] xl:transition-[opacity,translate,visibility] xl:duration-150 xl:ease-out xl:group-focus-within:visible xl:group-focus-within:translate-y-0 xl:group-focus-within:opacity-100 xl:group-hover:visible xl:group-hover:translate-y-0 xl:group-hover:opacity-100 ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobileNav}
                        className="group/item flex items-center justify-between gap-4 rounded-md px-3.5 py-2.75 text-[.92rem] font-medium text-navy-900 transition-colors hover:bg-grey-200 hover:text-blue-600 xl:rounded-none xl:border-l-2 xl:border-transparent xl:px-5 xl:py-2.5 xl:hover:border-cyan-500 xl:hover:bg-grey-100 xl:focus-visible:border-cyan-500 xl:focus-visible:bg-grey-100 xl:focus-visible:outline-none"
                      >
                        {child.label}
                        <ChevronRight className="hidden size-3.5 -translate-x-1 text-cyan-500 opacity-0 transition-[opacity,translate] group-hover/item:translate-x-0 group-hover/item:opacity-100 xl:block" />
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
