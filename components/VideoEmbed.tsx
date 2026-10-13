"use client";

import { Play } from "lucide-react";
import { useState } from "react";

/**
 * YouTube embed that shows a local poster until clicked, so YouTube's player
 * (and its cookies) only load for visitors who actually press play.
 */
export default function VideoEmbed({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="reveal relative mx-auto aspect-video max-w-225 overflow-hidden rounded-md bg-navy-900 shadow-md">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
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
