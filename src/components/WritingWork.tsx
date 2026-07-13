"use client";

import { useState } from "react";
import { writing } from "@/data/resume";

export function WritingWork() {
  const [tab, setTab] = useState<"writing" | "hackathons">("writing");

  return (
    <div>
      {/* segmented toggle */}
      <div className="inline-flex rounded-full bg-plum/[0.04] p-1 shadow-sm ring-1 ring-plum/5">
        <button
          onClick={() => setTab("writing")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            tab === "writing"
              ? "bg-gradient-to-r from-grape to-pink-500 text-white shadow"
              : "text-plum/60 hover:text-grape"
          }`}
        >
          📝 Research & Writing
        </button>
        <button
          onClick={() => setTab("hackathons")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            tab === "hackathons"
              ? "bg-gradient-to-r from-grape to-pink-500 text-white shadow"
              : "text-plum/60 hover:text-grape"
          }`}
        >
          🏆 Hackathons
        </button>
      </div>

      {tab === "writing" ? (
        <a
          href={writing.article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 block rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum/5 transition hover:-translate-y-1 hover:shadow-md sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-grape to-pink-500 text-2xl shadow-sm">
              📄
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              {writing.article.status}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-extrabold text-plum group-hover:text-grape">
            {writing.article.title}
          </h3>
          <p className="text-sm font-semibold text-grape">
            {writing.article.outlet} ↗
          </p>
          <p className="mt-3 text-sm leading-relaxed text-plum/75">
            {writing.article.text}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {writing.article.tags.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-plum/5 px-2.5 py-1 text-xs font-semibold text-plum/70"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {writing.hackathons.map((h) => (
            <a
              key={h.href}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-grape to-pink-500 text-2xl shadow-sm">
                  🏆
                </span>
                <span className="rounded-full bg-plum/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-plum/60">
                  Finalist
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-plum group-hover:text-grape">
                {h.name}
              </h3>
              <p className="text-sm font-semibold text-grape">{h.role}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-plum/75">
                {h.text}
              </p>
              <span className="mt-3 text-xs font-semibold text-grape">
                View project ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
