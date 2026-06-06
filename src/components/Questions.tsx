import Section from "./Section";
import { QUESTIONS } from "../lib/data";

export default function Questions() {
  return (
    <Section className="text-center">
      <h2 className="reveal text-3xl font-bold lowercase tracking-tight sm:text-5xl">
        questions you've actually been asking.
      </h2>

      <div className="mx-auto mt-14 max-w-4xl columns-2 gap-4 md:columns-4 [&>*]:mb-4">
        {QUESTIONS.map((q, i) => (
          <div
            key={q}
            className="reveal group flex break-inside-avoid cursor-default items-center rounded-xl border border-white/[0.06] bg-white/[0.04] p-4 text-left text-[15px] leading-snug text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/60 hover:bg-white/[0.07]"
            style={{ transitionDelay: `${(i % 4) * 40}ms` }}
          >
            {q}
          </div>
        ))}
      </div>

      <p className="reveal mt-14 text-lg font-medium text-purple-500">
        Akaya doesn't give you a horoscope. It gives you an answer.
      </p>
    </Section>
  );
}
