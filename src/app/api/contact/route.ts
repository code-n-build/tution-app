import { NextResponse } from "next/server";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const PROGRAMS = [
  "SEE Preparation",
  "+2 Science",
  "+2 Management",
  "Entrance Preparation",
  "Not sure yet",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\-.\s\d]{6,40}$/;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_MAX_TRACKED_IPS = 5_000;

const GENERIC_SEND_ERROR =
  "We could not send your message. Please try again shortly.";
const GENERIC_NETWORK_ERROR =
  "We could not reach the mail service. Please try again shortly.";
const NOT_CONFIGURED_ERROR = "The contact form is not configured yet.";

const requestsByIp = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  program?: unknown;
  message?: unknown;
  company?: unknown;
};

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  if (requestsByIp.size > RATE_LIMIT_MAX_TRACKED_IPS) {
    for (const [trackedIp, times] of requestsByIp) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        requestsByIp.delete(trackedIp);
      }
    }
  }

  const recent = (requestsByIp.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, recent);
    return true;
  }

  requestsByIp.set(ip, [...recent, now]);
  return false;
}

function readString(
  value: unknown,
  maxLength: number,
): string | null | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

// EmailJS error text can echo a submitted value back, so strip every credential
// before the message reaches a log or a response.
function redact(text: string, secrets: (string | undefined)[]): string {
  return secrets.reduce<string>(
    (accumulated, secret) =>
      secret ? accumulated.split(secret).join("[redacted]") : accumulated,
    text,
  );
}

export async function POST(request: Request) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  // The upstream error is developer-facing, so only expose it outside production.
  const isDev = process.env.NODE_ENV !== "production";

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return NextResponse.json(
      { ok: false, message: NOT_CONFIGURED_ERROR },
      { status: 503 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many messages sent. Please wait a minute and try again.",
      },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "That request could not be read." },
      { status: 400 },
    );
  }

  // Honeypot: a real visitor never sees this field, so a filled value means a bot.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = readString(payload.name, 100);
  const email = readString(payload.email, 200);
  const phone = readString(payload.phone, 40);
  const program = readString(payload.program, 60);
  const message = readString(payload.message, 2_000);

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (phone === null || (phone && !PHONE_PATTERN.test(phone))) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!program || !(PROGRAMS as readonly string[]).includes(program)) {
    errors.program = "Please choose a program.";
  }
  if (!message) errors.message = "Please enter a message.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fix the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const secrets = [serviceId, templateId, publicKey];

  const body: Record<string, unknown> = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    
    template_params: {
      user_name: name,
      user_email: email,
      user_phone: phone || "Not provided",
      program,
      message,
      sent_at: new Date().toISOString(),
    },
  };

  try {

    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const upstream = redact(
        (await response.text().catch(() => "")).trim(),
        secrets,
      );

      console.error(
        `EmailJS rejected the contact request (status ${response.status}): ${upstream}`,
      );

      return NextResponse.json(
        { ok: false, message: isDev && upstream ? upstream : GENERIC_SEND_ERROR },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);

    console.error(`EmailJS contact request could not reach the API: ${reason}`);

    return NextResponse.json(
      { ok: false, message: isDev ? `Network error: ${reason}` : GENERIC_NETWORK_ERROR },
      { status: 502 },
    );
  }
}
