"use client";

import { useState } from "react";

export default function TrackerPage() {
  const [password, setPassword] = useState("");
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok: boolean; views?: number };
      if (res.ok && data.ok) {
        setViews(data.views ?? 0);
      } else {
        setError("Wrong password — try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">
      <div className="w-full rounded-3xl bg-white p-8 shadow-lg ring-1 ring-plum/5">
        <div className="mb-2 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-grape to-pink-500 text-2xl shadow-sm">
          🔒
        </div>
        <h1 className="font-display text-2xl font-extrabold text-plum">
          Visit tracker
        </h1>
        <p className="mt-1 text-sm text-plum/60">
          Enter the password to see how many times the site has been opened.
        </p>

        {views === null ? (
          <form onSubmit={submit} className="mt-6 space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-plum outline-none ring-grape/30 focus:ring-2"
            />
            {error && (
              <p className="text-sm font-semibold text-pink-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-grape to-pink-500 px-4 py-3 font-bold text-white shadow transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Checking…" : "Unlock"}
            </button>
          </form>
        ) : (
          <div className="mt-6 text-center">
            <div className="font-display text-6xl font-extrabold text-grape">
              {views.toLocaleString()}
            </div>
            <p className="mt-2 text-sm font-semibold text-plum/70">
              total opens 💜
            </p>
            <button
              onClick={() => {
                setViews(null);
                setPassword("");
              }}
              className="mt-6 text-xs font-semibold text-plum/50 underline"
            >
              lock again
            </button>
          </div>
        )}
      </div>
      <a href="/" className="mt-6 text-sm font-semibold text-plum/50 hover:text-grape">
        ← back to portfolio
      </a>
    </main>
  );
}
