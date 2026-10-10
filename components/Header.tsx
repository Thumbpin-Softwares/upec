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

const bar = "h-0.5 w-6 rounded-xs bg-black transition-[translate,rotate,opacity]";

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
    <header className="sticky top-0 z-999 border-b border-grey-200 bg-white pt-4">
      <div className={`${container} flex h-19 items-center justify-between`}>
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/upec-logo.png" alt="UPEC logo" className="h-12 w-auto xs:h-18" />
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
          className={`fixed inset-x-0 top-23 bottom-0 flex flex-col items-stretch gap-1 overflow-y-auto bg-white p-5 transition-[translate] xl:static xl:flex-row xl:items-center xl:overflow-visible xl:bg-transparent xl:p-0 xl:translate-x-0 xl:transition-none ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            const open = openItem === item.href;
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center justify-between gap-1.25 border-b border-grey-200 px-1.5 py-4 text-[.95rem] font-medium transition-colors hover:text-blue-600 xl:justify-start xl:border-b-0 xl:px-4 xl:py-6.75 ${
                    active ? "text-blue-600" : "text-black"
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
                        className="group/item flex items-center justify-between gap-4 rounded-md px-3.5 py-2.75 text-[.92rem] font-medium text-black transition-colors hover:bg-grey-200 hover:text-blue-600 xl:rounded-none xl:border-l-2 xl:border-transparent xl:px-5 xl:py-2.5 xl:hover:border-cyan-500 xl:hover:bg-grey-100 xl:focus-visible:border-cyan-500 xl:focus-visible:bg-grey-100 xl:focus-visible:outline-none"
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
