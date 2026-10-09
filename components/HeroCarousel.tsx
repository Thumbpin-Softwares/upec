"use client";

import { useEffect, useState } from "react";

const INTERVAL = 6000;

/** Cross-fading background images for the hero; render inside a `relative` container. */
export default function HeroCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % images.length), INTERVAL);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-[opacity,scale] duration-[1500ms,7500ms] ease-in-out motion-reduce:transition-none ${
            i === current ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,26,51,.88),rgba(10,44,84,.72))]" />
    </div>
  );
}
