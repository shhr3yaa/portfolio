"use client";

import { useEffect, useRef, useState } from "react";
import { codMobile } from "@/data/resume";

function Reticle({ live }: { live: boolean }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0">
      <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#17c98b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={live ? 0 : c}
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 1100ms ease-out" }}
      />
      <line x1="60" y1="6" x2="60" y2="24" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="96" x2="60" y2="114" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="6" y1="60" x2="24" y2="60" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="96" y1="60" x2="114" y2="60" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="60" r="4" fill="#17c98b" />
    </svg>
  );
}

export function CodMobile() {
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const region = codMobile.regions[active];

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1424] to-[#3b1d5e] p-6 text-white shadow-xl sm:p-8"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
        <span className="h-2 w-2 rounded-full bg-[#17c98b]" /> Featured experience
      </div>
      <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
        {codMobile.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-[#17c98b]">{codMobile.subtitle}</p>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#17c98b]/15 px-3 py-1.5 text-sm font-bold text-[#17c98b]">
        🎮 {codMobile.launch}
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
        {codMobile.intro}
      </p>

      {/* real chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {codMobile.chips.map((ch) => (
          <span
            key={ch}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
          >
            {ch}
          </span>
        ))}
      </div>

      {/* region tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {codMobile.regions.map((r, i) => (
          <button
            key={r.name}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              active === i
                ? "bg-[#17c98b] text-[#1c1424]"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            <span className="mr-1.5">{r.flag}</span>
            {r.name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid items-center gap-6 sm:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center">
          <Reticle live={live} />
          <div className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
            go-to-market
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span>{region.flag}</span>
            <span>{region.name}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{region.story}</p>
        </div>
      </div>
    </div>
  );
}
