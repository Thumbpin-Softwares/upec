"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * YouTube embed that shows a local poster until clicked, so YouTube's player
 * (and its cookies) only load for visitors who actually press play.
 *
 * With `autoplay`, the player loads by itself once the video scrolls into view
 * and plays muted on a loop (browsers only allow autoplay without sound);
 * visitors can unmute from the player controls.
 */
export default function VideoEmbed({
  id,
  title,
  poster,
  autoplay = false,
  className = "",
}: {
  id: string;
  title: string;
  poster: string;
  autoplay?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!autoplay || !el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlaying(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoplay]);

  const params = autoplay
    ? `autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0`
    : "autoplay=1&rel=0";

  return (
    <div
      ref={ref}
      className={`reveal relative mx-auto aspect-video w-full max-w-225 overflow-hidden rounded-md bg-navy-900 shadow-md ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cyan-400"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            className="size-full object-cover transition-[scale] duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
          <span className="absolute inset-0 bg-linear-to-t from-navy-900/85 via-navy-900/40 to-navy-900/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-cyan-500 shadow-lg ring-8 ring-cyan-500/25 transition-[scale] group-hover:scale-110 md:size-20">
              <Play className="ml-1 size-7 fill-navy-900 text-navy-900 md:size-8" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
