"use client";

import { useEffect, useState } from "react";

const INTERVAL = 6000;

export type HeroSlide = { src: string; alt: string };

/**
 * Framed, cross-fading photo card for the hero. The source photos are ~710px wide,
 * so they are shown at card size rather than stretched full-bleed.
 */
export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);

  // Restarts whenever `current` changes, so picking a dot gives that slide a full interval
  useEffect(() => {
    if (slides.length < 2) return;
    const id = setTimeout(() => setCurrent((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [current, slides.length]);

  return (
    <div className="relative aspect-16/10 overflow-hidden rounded-card bg-navy-800 shadow-lg ring-1 ring-white/15">
      {slides.map(({ src, alt }, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          aria-hidden={i !== current}
          className={`absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[1200ms,7500ms] ease-in-out motion-reduce:transition-none ${
            i === current ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}

      {/* Only the bottom edge is tinted, enough to carry the caption and dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-900/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div className="border-l-2 border-cyan-500 pl-3 leading-tight text-white">
          <div className="text-xl font-bold sm:text-2xl">30 Years</div>
          <div className="text-[.78rem] font-medium tracking-[.06em] text-[#c8d6e5] uppercase">Engineering Excellence</div>
        </div>
        {slides.length > 1 && (
          <div className="flex items-center">
            {slides.map(({ src }, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                aria-current={i === current}
                onClick={() => setCurrent(i)}
                className="group flex h-11 cursor-pointer items-center border-0 bg-transparent px-1"
              >
                <span
                  className={`h-1 rounded-full transition-[width,background-color] ${
                    i === current ? "w-7 bg-cyan-400" : "w-3 bg-white/50 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
