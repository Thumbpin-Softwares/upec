"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  title: string;
  subtitle?: string;
  /** Bento tile size on tablet and up; regular tiles fill the remaining cells */
  size?: "large" | "wide";
};

const tileSize = {
  large: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
};

const navBtn =
  "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-cyan-400";

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : photos[index];

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [index, step]);

  return (
    <>
      <div className="reveal grid auto-rows-55 grid-cols-1 gap-3 sm:grid-flow-dense sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {photos.map((p, i) => (
          <a
            key={p.src}
            href={p.src}
            aria-label={`View ${p.subtitle ? `${p.title}: ${p.subtitle}` : p.title}`}
            className={`group relative overflow-hidden rounded-md bg-grey-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${p.size ? tileSize[p.size] : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setIndex(i);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
            {/* Caption: always shown on touch screens, revealed on hover/focus with a mouse */}
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-navy-900/85 via-navy-900/10 to-transparent p-4 transition-opacity duration-300 pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100 pointer-fine:group-focus-visible:opacity-100">
              <span className="text-[.95rem] font-semibold text-white">{p.title}</span>
              {p.subtitle && <span className="text-[.78rem] text-[#cfe0ef]">{p.subtitle}</span>}
            </div>
            <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 className="size-3.5" />
            </span>
          </a>
        ))}
      </div>

      {active && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-2000 flex flex-col items-center justify-center bg-[rgba(6,10,18,.95)] px-4 py-16 md:px-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIndex(null);
          }}
        >
          <div className="absolute top-4 left-5 text-sm font-medium text-[#93a7bb] tabular-nums">
            {index + 1} / {photos.length}
          </div>
          <button
            type="button"
            autoFocus
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute top-3 right-3 flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <X className="size-6" />
          </button>

          <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className={`${navBtn} left-3 md:left-6`}>
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" aria-label="Next photo" onClick={() => step(1)} className={`${navBtn} right-3 md:right-6`}>
            <ChevronRight className="size-6" />
          </button>

          <figure className="m-0 flex max-h-full flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              className="max-h-[75vh] max-w-full rounded-md object-contain shadow-lg"
            />
            <figcaption className="mt-4 text-center">
              <span className="block font-semibold text-white">{active.title}</span>
              <span className="text-sm text-[#93a7bb]">{active.caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
