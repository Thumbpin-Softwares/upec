"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scroll-reveal for every `.reveal` element; re-runs on each client-side navigation. */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Enable reveal-on-scroll only once JS is confirmed running
    document.body.classList.add("js-ready");

    const revealEls = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
