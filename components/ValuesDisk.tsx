"use client";

import { useState } from "react";

type Value = [letter: string, name: string, text: string];

// SVG geometry (viewBox is centred on 0,0)
const R_OUT = 96;
const R_IN = 32;
const R_LABEL = (R_OUT + R_IN) / 2 + 2;
const POP = 4; // how far the active slice slides out

const pt = (r: number, a: number) => `${(r * Math.cos(a)).toFixed(3)} ${(r * Math.sin(a)).toFixed(3)}`;

/** Annular wedge from angle a0 to a1 (radians) */
function wedge(a0: number, a1: number) {
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${pt(R_OUT, a0)} A${R_OUT} ${R_OUT} 0 ${large} 1 ${pt(R_OUT, a1)} L${pt(R_IN, a1)} A${R_IN} ${R_IN} 0 ${large} 0 ${pt(R_IN, a0)} Z`;
}

/**
 * I-CREATE as a solid disk cut into one slice per letter. Hovering, focusing
 * or tapping a slice lifts it out and shows that value in the panel beside
 * the disk (below it on phones).
 */
export default function ValuesDisk({ values }: { values: Value[] }) {
  const [active, setActive] = useState(0);
  const [letter, name, text] = values[active];
  const span = (2 * Math.PI) / values.length;

  return (
    <div className="reveal mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14">
      <svg
        viewBox="-100 -100 200 200"
        className="mx-auto w-full max-w-[26rem] drop-shadow-[0_10px_24px_rgb(6_26_51/0.08)]"
        role="group"
        aria-label="I-CREATE values"
      >
        {values.map(([l, valueName], i) => {
          // Slice i is centred on its angle; I sits at 12 o'clock, then clockwise
          const mid = i * span - Math.PI / 2;
          const on = i === active;
          const dx = on ? POP * Math.cos(mid) : 0;
          const dy = on ? POP * Math.sin(mid) : 0;
          return (
            <g
              key={valueName}
              role="button"
              tabIndex={0}
              aria-label={valueName}
              aria-pressed={on}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              className="group cursor-pointer outline-none"
              style={{ transform: `translate(${dx.toFixed(3)}px, ${dy.toFixed(3)}px)`, transition: "transform 200ms ease-out" }}
            >
              <path
                d={wedge(mid - span / 2, mid + span / 2)}
                className={`stroke-[1] transition-[fill] duration-200 group-focus-visible:stroke-cyan-500 group-focus-visible:stroke-2 ${
                  on ? "fill-navy-800 stroke-navy-800" : "fill-white stroke-grey-200 group-hover:fill-grey-100"
                }`}
              />
              <text
                x={(R_LABEL * Math.cos(mid)).toFixed(3)}
                y={(R_LABEL * Math.sin(mid)).toFixed(3)}
                textAnchor="middle"
                dominantBaseline="central"
                className={`pointer-events-none text-[22px] font-bold transition-[fill] duration-200 ${
                  on ? (i === 0 ? "fill-cyan-400" : "fill-white") : i === 0 ? "fill-cyan-500" : "fill-navy-800"
                }`}
              >
                {l}
              </text>
            </g>
          );
        })}
        {/* Hub */}
        <circle r={R_IN - 3} className="fill-white stroke-grey-200 stroke-[1]" />
        <text textAnchor="middle" dominantBaseline="central" className="pointer-events-none fill-navy-800 text-[8.5px] font-bold tracking-[.06em]">
          <tspan className="fill-cyan-500">I</tspan>-CREATE
        </text>
      </svg>

      {/* Readout beside the disk */}
      <div aria-live="polite" className="max-md:text-center">
        <div className="mb-4 flex items-baseline gap-3 max-md:justify-center">
          <span className={`text-7xl leading-none font-bold md:text-8xl ${active === 0 ? "text-cyan-500" : "text-navy-800"}`}>{letter}</span>
          <span className="text-sm font-semibold tracking-[.12em] text-grey-600 tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-2 text-[1.5rem] md:text-[1.9rem]">{name}</h3>
        <p className="m-0 max-w-md text-base text-pretty max-md:mx-auto md:text-[1.05rem]">{text}</p>
      </div>
    </div>
  );
}
