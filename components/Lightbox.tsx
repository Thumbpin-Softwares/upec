"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import type { Photo } from "@/components/Gallery";

const navBtn =
  "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-cyan-400";

/** Full-screen photo viewer with prev/next (buttons and arrow keys); closes on Esc or backdrop click. */
export default function Lightbox({
  photos,
  index,
  onIndex,
  onClose,
}: {
  photos: Photo[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const active = photos[index];
  const many = photos.length > 1;

  const step = useCallback(
    (dir: 1 | -1) => onIndex((index + dir + photos.length) % photos.length),
    [index, onIndex, photos.length],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (many && e.key === "ArrowRight") step(1);
      if (many && e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [many, onClose, step]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.caption}
      className="fixed inset-0 z-2000 flex flex-col items-center justify-center bg-[rgba(6,10,18,.95)] px-4 py-16 md:px-20"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {many && (
        <div className="absolute top-4 left-5 text-sm font-medium text-[#93a7bb] tabular-nums">
          {index + 1} / {photos.length}
        </div>
      )}
      <button
        type="button"
        autoFocus
        aria-label="Close"
        onClick={onClose}
        className="absolute top-3 right-3 flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-cyan-400"
      >
        <X className="size-6" />
      </button>

      {many && (
        <>
          <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className={`${navBtn} left-3 md:left-6`}>
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" aria-label="Next photo" onClick={() => step(1)} className={`${navBtn} right-3 md:right-6`}>
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

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
          {active.caption !== active.title && <span className="text-sm text-[#93a7bb]">{active.caption}</span>}
        </figcaption>
      </figure>
    </div>
  );
}
