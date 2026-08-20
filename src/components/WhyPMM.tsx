"use client";

import { useState } from "react";
import { pmmFit } from "@/data/resume";

export function WhyPMM() {
  const [active, setActive] = useState(0);
  const current = pmmFit[active];

  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_1.3fr]">
      {/* selector list */}
      <div className="flex flex-col gap-2">
        {pmmFit.map((p, i) => (
          <button
            key={p.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
              active === i
                ? "bg-gradient-to-r from-grape to-pink-500 text-white shadow-md"
                : "bg-white text-plum/80 shadow-sm ring-1 ring-plum/5 hover:-translate-y-0.5"
            }`}
          >
            <span className="text-xl">{p.icon}</span>
            <span className="font-display text-sm font-bold sm:text-base">
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* evidence panel */}
      <div
        key={active}
        className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum/5 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-grape to-pink-500 text-2xl shadow-sm">
            {current.icon}
          </span>
          <div>
            <h3 className="font-display text-xl font-extrabold text-plum">
              {current.title}
            </h3>
            <p className="text-sm font-semibold text-grape">{current.pitch}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-3">
          {current.proof.map((pf, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-plum/75"
            >
              <span className="mt-0.5 shrink-0 text-grape">✦</span>
              <span>{pf}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
