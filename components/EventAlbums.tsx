"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import type { PhotoGroup } from "@/lib/images";

/**
 * One cover card per event folder (first photo + event name). Clicking a card opens
 * that event's photos in the lightbox. Multi-photo albums get a stacked edge behind
 * the card so they read as albums.
 */
export default function EventAlbums({ groups }: { groups: PhotoGroup[] }) {
  const [open, setOpen] = useState<{ group: number; index: number } | null>(null);

  return (
    <>
      <div className="reveal grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, gi) => {
          const cover = g.photos[0];
          const label = g.title || cover.title || "Photos";
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setOpen({ group: gi, index: 0 })}
              aria-label={`Open ${label} photos`}
              className="group relative block cursor-pointer pt-2 text-left focus-visible:outline-none"
            >
              {g.photos.length > 1 && (
                <>
                  <span className="absolute inset-x-4 top-0 h-6 rounded-md bg-grey-400/40" />
                  <span className="absolute inset-x-2 top-1 h-6 rounded-md bg-grey-400/70" />
                </>
              )}
              <span className="relative block aspect-4/3 overflow-hidden rounded-md bg-grey-200 shadow-sm transition-shadow group-hover:shadow-md group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-cyan-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cover.src}
                  alt={cover.alt}
                  loading="lazy"
                  className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-900/90 via-navy-900/40 to-transparent px-4 pt-12 pb-4">
                  <span className="block text-lg font-semibold text-white">{label}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {open && (
        <Lightbox
          photos={groups[open.group].photos}
          index={open.index}
          onIndex={(index) => setOpen({ group: open.group, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
