"use client";

import { useEffect, useRef, useState } from "react";
import { skillDivisions } from "@/data/resume";

const total = skillDivisions.reduce((n, d) => n + d.tools.length, 0);

export function SkillsBreakdown() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const current = skillDivisions[active];

  return (
    <div
      ref={ref}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum/5 sm:p-8"
    >
      {/* interactive spectrum — width reflects number of tools in each area */}
      <div className="flex h-4 w-full overflow-hidden rounded-full ring-1 ring-plum/5">
        {skillDivisions.map((d, i) => (
          <button
            key={d.key}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={d.key}
            className="h-full transition-all duration-700 ease-out"
            style={{
              width: shown ? `${(d.tools.length / total) * 100}%` : "0%",
              background: d.color,
              opacity: active === i ? 1 : 0.55,
            }}
          />
        ))}
      </div>

      {/* category tabs */}
      <div className="mt-5 flex flex-wrap gap-2">
        {skillDivisions.map((d, i) => (
          <button
            key={d.key}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition"
            style={{
              background: active === i ? d.color : "rgba(28,20,36,0.04)",
              color: active === i ? "#fff" : "rgba(28,20,36,0.7)",
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: active === i ? "#fff" : d.color }}
            />
            {d.key}
          </button>
        ))}
      </div>

      {/* active detail */}
      <div className="mt-6 rounded-2xl bg-plum/[0.03] p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl font-extrabold text-plum">
            {current.key}
          </h3>
          <span
            className="text-sm font-semibold"
            style={{ color: current.color }}
          >
            {current.tools.length} tools
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {current.tools.map((t) => (
            <span
              key={t}
              className="rounded-lg px-3 py-1 text-sm font-semibold text-white shadow-sm"
              style={{ background: current.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-plum/50">
        Hover or tap a segment to explore each area ↑
      </p>
    </div>
  );
}
