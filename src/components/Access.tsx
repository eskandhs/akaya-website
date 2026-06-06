import { useState } from "react";
import Section from "./Section";
import Countdown from "./Countdown";

// Set once the waitlist is meaningful (500+). Below that, leave null to hide.
const WAITLIST_COUNT: number | null = null;

// Google Apps Script web app endpoint that appends signups to the sheet.
const WAITLIST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyRhU-RHwGf5SxyIK59T3KxX5-gx71iPbaCMpRJawUdsVdPtJN6E0u9CfAquLKFdBizCg/exec";

export default function Access() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        // Apps Script doesn't send CORS headers; no-cors lets the request
        // through (response is opaque, which is fine for fire-and-forget).
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email, source: "landing" }),
      });
      setSubmitted(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="access" className="text-center">
      <h2 className="reveal text-3xl font-bold lowercase tracking-tight sm:text-5xl">
        we're letting people in slowly.
      </h2>
      <p className="reveal mx-auto mt-5 max-w-lg text-base text-white/70 sm:text-lg">
        Akaya launches July 2026. Early access members get in first. Free during
        beta.
      </p>

      <div className="reveal mx-auto mt-10 max-w-xl">
        {submitted ? (
          <div className="rounded-xl border border-purple-500/40 bg-purple-500/[0.06] px-6 py-8">
            <p className="text-lg font-semibold text-white">You're on the list.</p>
            <p className="mt-2 text-sm text-white/60">
              We'll email you the moment your access opens.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              aria-label="Email address"
              className="h-14 flex-1 rounded-xl border border-white/10 bg-elevated px-5 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-14 shrink-0 rounded-xl bg-purple-700 px-7 text-base font-semibold text-white shadow-[0_10px_40px_-12px_rgba(77,40,232,0.9)] transition-all duration-300 hover:bg-purple-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Joining…" : "Get Early Access"}
            </button>
          </form>
        )}
        {status === "error" && !submitted && (
          <p className="mt-3 text-sm text-error">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <Countdown className="reveal mt-14" />

      {WAITLIST_COUNT && WAITLIST_COUNT > 500 && (
        <p className="reveal mt-8 text-sm text-purple-500">
          {WAITLIST_COUNT.toLocaleString()} people on the waitlist
        </p>
      )}
    </Section>
  );
}
