import Section from "./Section";

export default function Problem() {
  return (
    <Section className="text-left">
      <div className="mx-auto max-w-3xl">
        <h2 className="reveal text-3xl font-bold lowercase leading-tight tracking-tight sm:text-5xl">
          you already know horoscopes are useless.
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-relaxed text-white/80 sm:text-xl">
          <p className="reveal">
            Sun-sign apps tell you Mercury is in retrograde and to "be careful
            with communication."
          </p>
          <p className="reveal text-base italic text-white/45">
            Thanks. Very helpful.
          </p>
          <p className="reveal">
            Therapy gives you frameworks to understand yourself. But it can't
            tell you <em className="not-italic text-white">when</em> the
            pressure lifts or whether this job is the right move.
          </p>
          <p className="reveal">
            Personality tests give you a four-letter label and a mug.
          </p>
        </div>

        {/* The pivot */}
        <div className="reveal mt-14">
          <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="mt-8 text-xl font-medium leading-snug text-white sm:text-2xl">
            None of them answer the actual question:
          </p>
          <p className="mt-3 text-xl font-semibold leading-snug text-purple-500 sm:text-2xl">
            what should I do, and when should I do it?
          </p>
        </div>
      </div>
    </Section>
  );
}
