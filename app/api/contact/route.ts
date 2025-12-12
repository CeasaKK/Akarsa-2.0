import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (!webhook) {
      console.error("GOOGLE_SHEETS_WEBHOOK is not defined");
      return NextResponse.json({ success: false, error: "Webhook not set" }, { status: 500 });
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Google Script failed:", text);
      throw new Error("Google Script failed: " + text);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API contact error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}