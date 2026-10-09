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
      <div className="grid grid-4 reveal">
        {photos.map((p) => (
          <a
            key={p.src}
            href={p.src}
            className="photo-card"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => {
              e.preventDefault();
              setActive(p);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} />
            <div className="cap">
              <strong>{p.title}</strong>
              <span>{p.subtitle}</span>
            </div>
          </a>
        ))}
      </div>

      <div
        className={`lightbox${active ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}>
          &times;
        </button>
        {active && (
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <div className="lb-cap">{active.caption}</div>
          </div>
        )}
      </div>
    </>
  );
}
