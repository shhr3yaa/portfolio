import { incrementViews } from "@/lib/counter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST() {
  await incrementViews();
  return Response.json({ ok: true });
}
