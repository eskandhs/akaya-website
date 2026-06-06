import { useState } from "react";
import Section from "./Section";
import Countdown from "./Countdown";

// Set once the waitlist is meaningful (500+). Below that, leave null to hide.
const WAITLIST_COUNT: number | null = null;

export default function Access() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to a real waitlist endpoint at integration time.
    setSubmitted(true);
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
              className="h-14 shrink-0 rounded-xl bg-purple-700 px-7 text-base font-semibold text-white shadow-[0_10px_40px_-12px_rgba(77,40,232,0.9)] transition-all duration-300 hover:bg-purple-600 active:scale-[0.98]"
            >
              Get Early Access
            </button>
          </form>
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
