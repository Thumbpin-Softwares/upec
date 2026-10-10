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

  return <>{value + suffix}</>;
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
      className="reveal relative z-5 -mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border-b-3 border-cyan-500 bg-grey-200 shadow-md sm:-mt-7.5 md:-mt-14 lg:grid-cols-4"
      ref={ref}
    >
      {stats.map((s) => (
        <div
          className="bg-white px-2.5 py-4.5 text-center xs:px-3.5 xs:py-5.5 md:px-5 md:py-7"
          key={s.label}
        >
          {s.icon && (
            <span className="mx-auto mb-2.5 flex size-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 md:mb-3 md:size-11 [&_svg]:size-4.5 md:[&_svg]:size-5.5">
              {s.icon}
            </span>
          )}
          <span className="block text-[1.4rem] font-bold text-navy-800 xs:text-[1.7rem] md:text-[2.1rem]">
            {"count" in s ? <Counter target={s.count} suffix={s.suffix} run={run} /> : s.text}
          </span>
          <span className="text-[.72rem] font-medium text-grey-600 xs:text-[.85rem]">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
