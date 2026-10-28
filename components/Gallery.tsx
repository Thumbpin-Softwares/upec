"use client";

import { Maximize2 } from "lucide-react";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

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

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

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

      {index !== null && <Lightbox photos={photos} index={index} onIndex={setIndex} onClose={() => setIndex(null)} />}
    </>
  );
}
