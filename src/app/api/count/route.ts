import { getViews, resetViews } from "@/lib/counter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Password is checked server-side so it is never shipped to the browser.
const PASSWORD = process.env.TRACKER_PASSWORD || "mamas";

export async function POST(req: Request) {
  let password = "";
  let reset = false;
  try {
    const body = (await req.json()) as { password?: string; reset?: boolean };
    password = body.password ?? "";
    reset = body.reset === true;
  } catch {
    password = "";
  }

  if (password !== PASSWORD) {
    return Response.json({ ok: false, error: "Wrong password" }, { status: 401 });
  }

  const views = reset ? await resetViews() : await getViews();
  return Response.json({ ok: true, views });
}
