import { Suspense, lazy, useEffect, useState } from "react";
import { CTAButton } from "./ui";
import Countdown from "./Countdown";

const HeroScene = lazy(() => import("./HeroScene"));

function useEnable3D() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Probe for WebGL support before mounting the canvas.
    let webgl = false;
    try {
      const canvas = document.createElement("canvas");
      webgl = !!(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
    } catch {
      webgl = false;
    }
    setEnabled(!reduced && webgl);
  }, []);
  return enabled;
}

export default function Hero({ revealed }: { revealed: boolean }) {
  const enable3D = useEnable3D();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-[24vh] text-center">
      {/* 3D backdrop or static fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 brand-glow opacity-70" />
        {enable3D && (
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <HeroScene revealed={revealed} />
            </Suspense>
          </div>
        )}
        {/* Vignette so text stays legible over the scene */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_55%_at_50%_44%,rgba(0,0,0,0.68),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div
        className={`relative z-10 mx-auto flex max-w-3xl flex-col items-center transition-all duration-1000 ease-out ${
          revealed ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        <h1 className="text-balance text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.5rem]">
          ask a real question. get a real answer. with a date
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-xl">
          Precision personal guidance powered by 5,000 years of planetary
          pattern data and NASA-grade orbital mathematics.
        </p>

        <div className="mt-10 w-full sm:w-auto">
          <a href="#access" className="block sm:inline-block">
            <CTAButton fullWidthMobile>Get Early Access</CTAButton>
          </a>
        </div>

        <Countdown className="mt-12" />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-tertiary">
        <span className="block h-10 w-[1px] animate-[pulse-ring_2.4s_ease-in-out_infinite] bg-gradient-to-b from-purple-500/0 via-purple-500 to-purple-500/0" />
      </div>
    </section>
  );
}
