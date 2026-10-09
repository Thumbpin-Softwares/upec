"use client";

import { useEffect, useState } from "react";

export type Photo = { src: string; alt: string; caption: string; title: string; subtitle: string };

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="reveal grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6.5 lg:grid-cols-4">
        {photos.map((p) => (
          <a
            key={p.src}
            href={p.src}
            className="group relative aspect-4/3 overflow-hidden rounded-card bg-navy-900 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              setActive(p);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} className="size-full object-cover transition-[scale] duration-500 group-hover:scale-106" />
            <div className="absolute inset-x-0 bottom-0 bg-linear-0 from-navy-900/92 to-transparent p-4 text-white">
              <strong className="block text-[.95rem]">{p.title}</strong>
              <span className="text-[.78rem] text-cyan-400">{p.subtitle}</span>
            </div>
          </a>
        ))}
      </div>

      <div
        className={`fixed inset-0 z-2000 items-center justify-center bg-[rgba(6,10,18,.94)] px-4 pt-11.5 pb-4 min-[601px]:p-10 ${
          active ? "flex" : "hidden"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        <button
          className="absolute top-3.5 right-3.5 min-h-11 min-w-11 cursor-pointer border-0 bg-transparent p-2.5 text-[2rem] leading-none text-white"
          aria-label="Close"
          onClick={() => setActive(null)}
        >
          &times;
        </button>
        {active && (
          <div className="max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[72vh] max-w-full rounded-lg shadow-lg min-[601px]:max-h-[82vh] min-[601px]:max-w-[90vw]"
            />
            <div className="mt-4 text-center text-[.9rem] text-[#cfe0ef]">{active.caption}</div>
          </div>
        )}
      </div>
    </>
  );
}
