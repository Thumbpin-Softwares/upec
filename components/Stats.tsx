"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string } & ({ count: number; suffix?: string } | { text: string });

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
    <div className="stats reveal" ref={ref}>
      {stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <span className="num">
            {"count" in s ? <Counter target={s.count} suffix={s.suffix} run={run} /> : s.text}
          </span>
          <span className="lbl">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
