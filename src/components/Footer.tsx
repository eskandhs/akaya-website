export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 px-6 py-12 text-center">
      <p className="mx-auto max-w-2xl text-xs leading-relaxed text-white/40">
        Our analysis is built on astronomical calculations and empirical pattern
        recognition, designed by human experts and delivered by AI. Guidance is
        for personal reflection, not professional advice.
      </p>
      <p className="mt-5 text-[11px] text-white/30">
        © 2026 Akaya. All rights reserved.{"  "}
        <span className="px-1">|</span>
        <a href="#" className="transition-colors hover:text-white/60">
          Privacy Policy
        </a>
        <span className="px-1">|</span>
        <a href="#" className="transition-colors hover:text-white/60">
          Terms of Service
        </a>
      </p>
    </footer>
  );
}
