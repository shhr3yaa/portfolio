import { getViews } from "@/lib/counter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Password is checked server-side so it is never shipped to the browser.
const PASSWORD = process.env.TRACKER_PASSWORD || "mamas";

export async function POST(req: Request) {
  let password = "";
  try {
    const body = (await req.json()) as { password?: string };
    password = body.password ?? "";
  } catch {
    password = "";
  }

  if (password !== PASSWORD) {
    return Response.json({ ok: false, error: "Wrong password" }, { status: 401 });
  }

  const views = await getViews();
  return Response.json({ ok: true, views });
}
