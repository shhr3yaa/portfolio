// Simple global view counter.
// In production it uses an Upstash/Vercel KV Redis store (via REST) when the
// KV_REST_API_URL / KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_*) env vars are set.
// Locally (no env vars) it falls back to an in-memory counter that resets on restart.

const KEY = "portfolio_views";

const restUrl =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const restToken =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

// In-memory fallback (per server instance)
const globalStore = globalThis as unknown as { __views?: number };
if (globalStore.__views === undefined) globalStore.__views = 0;

async function kv(path: string): Promise<number | null> {
  if (!restUrl || !restToken) return null;
  try {
    const res = await fetch(`${restUrl}/${path}`, {
      headers: { Authorization: `Bearer ${restToken}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: number | string | null };
    const n = Number(data.result ?? 0);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return null;
  }
}

export async function incrementViews(): Promise<number> {
  const kvResult = await kv(`incr/${KEY}`);
  if (kvResult !== null) return kvResult;
  globalStore.__views = (globalStore.__views ?? 0) + 1;
  return globalStore.__views;
}

export async function getViews(): Promise<number> {
  const kvResult = await kv(`get/${KEY}`);
  if (kvResult !== null) return kvResult;
  return globalStore.__views ?? 0;
}

export async function resetViews(): Promise<number> {
  await kv(`set/${KEY}/0`);
  globalStore.__views = 0;
  return 0;
}
