"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Stat = { label: string; icon?: ReactNode } & ({ count: number; suffix?: string } | { text: string });

const DURATION = 1400;

function Counter({ target, suffix = "", run }: { target: number; suffix?: string; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / DURATION, 1);
      setValue(progress < 1 ? Math.floor(progress * target) : target);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  return (
    <>
      {value.toLocaleString("en-IN")}
      {/* "+" hugs the number; a unit such as "Kg" is set smaller beside it */}
      {suffix && (
        <span className={suffix.length > 1 ? "ml-1.5 text-[.5em] font-semibold text-grey-600" : "text-cyan-500"}>
          {suffix}
        </span>
      )}
    </>
  );
}

export default function Stats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      // One strip: the 1px gap shows the grey background through as divider lines
      className="reveal relative z-5 -mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-grey-200 shadow-md ring-1 ring-grey-200 sm:-mt-7.5 md:-mt-14 lg:grid-cols-4"
      ref={ref}
    >
      {stats.map((s) => (
        <div
          className="flex flex-col items-start gap-3 bg-white px-4 py-5 xs:px-5 md:flex-row md:items-center md:gap-4 md:px-6 md:py-7 xl:px-7"
          key={s.label}
        >
          {s.icon && (
            // Minimal: bare thin-stroke icon, no tile
            <span className="flex flex-none text-cyan-500 [&_svg]:size-6 [&_svg]:stroke-[1.5] md:[&_svg]:size-7">
              {s.icon}
            </span>
          )}
          <div className="min-w-0">
            <span className="block text-[1.5rem] leading-none font-bold whitespace-nowrap text-navy-800 tabular-nums xs:text-[1.75rem] md:text-[2rem]">
              {"count" in s ? <Counter target={s.count} suffix={s.suffix} run={run} /> : s.text}
            </span>
            <span className="mt-1.5 block text-[.68rem] leading-tight font-semibold tracking-[.08em] text-grey-600 uppercase xs:text-[.72rem]">
              {s.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
