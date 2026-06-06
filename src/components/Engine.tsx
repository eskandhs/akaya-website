import Section from "./Section";

export default function Engine() {
  return (
    <Section className="text-center">
      <h2 className="reveal mx-auto max-w-3xl text-3xl font-bold lowercase leading-tight tracking-tight text-purple-500 sm:text-5xl">
        the world's oldest decision-intelligence system. now computable.
      </h2>

      <div className="reveal mx-auto mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
        <p>
          Akaya runs on Vedic Jyotish — a 5,000-year empirical framework for
          mapping planetary positions to human behavioral patterns. Not belief.
          Observation, documented across millennia and refined into the
          Parashari system used by serious analysts worldwide.
        </p>
        <p>
          Your birth data is processed through Swiss Ephemeris — the same
          orbital calculation engine used by NASA and international research
          institutions. Precision to fractions of an arc-second.
        </p>
      </div>

      <p className="reveal mt-8 text-xl font-bold text-white sm:text-2xl">
        5,000 years of pattern data. NASA-grade math. One conversation.
      </p>
    </Section>
  );
}
