import Section from "./Section";
import ChatCard from "./ChatCard";
import { PRIMARY_CONVERSATION, SECONDARY_CONVERSATIONS } from "../lib/data";

export default function Showcase() {
  return (
    <Section id="showcase" className="text-center">
      <p className="reveal text-[11px] uppercase tracking-[0.28em] text-purple-500">
        What Akaya actually does
      </p>
      <h2 className="reveal mt-4 text-3xl font-bold lowercase tracking-tight sm:text-5xl">
        real question. real answer. real date.
      </h2>
      <p className="reveal mx-auto mt-5 max-w-xl text-sm text-white/55 sm:text-base">
        This is an actual Akaya conversation. The user's identity is redacted.
        The dates are real.
      </p>

      {/* Primary conversation — the centerpiece */}
      <div className="reveal relative mx-auto mt-14 max-w-2xl">
        <div className="absolute -inset-10 -z-10 brand-glow opacity-70" />
        <ChatCard conversation={PRIMARY_CONVERSATION} primary />
      </div>

      {/* Secondary conversations: side-by-side on desktop, swipeable on mobile */}
      <div className="mt-10">
        <div
          className="reveal flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible"
          role="group"
          aria-label="More Akaya conversations"
        >
          {SECONDARY_CONVERSATIONS.map((c) => (
            <div
              key={c.id}
              className="min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0"
            >
              <ChatCard conversation={c} className="h-full" />
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-tertiary md:hidden">Swipe for more →</p>
      </div>

      {/* The proof line */}
      <div className="reveal mt-16">
        <p className="text-xl font-semibold uppercase tracking-[0.16em] text-purple-500 sm:text-2xl">
          Verdict. Timing. Specificity.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
          Not vibes. Not "Mercury is in retrograde." Actual answers with actual
          dates.
        </p>
      </div>
    </Section>
  );
}
