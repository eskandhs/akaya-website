import type { ReactNode } from "react";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/Logo.png"
      alt="Akaya"
      className={`inline-block w-auto ${className}`}
    />
  );
}

export function CTAButton({
  children,
  className = "",
  type = "button",
  fullWidthMobile = false,
}: {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  fullWidthMobile?: boolean;
}) {
  return (
    <button
      type={type}
      className={`group relative inline-flex h-14 items-center justify-center rounded-xl bg-purple-700 px-8 text-base font-semibold text-white shadow-[0_10px_40px_-12px_rgba(77,40,232,0.9)] transition-all duration-300 hover:bg-purple-600 hover:shadow-[0_16px_50px_-10px_rgba(128,102,255,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:scale-[0.98] ${
        fullWidthMobile ? "w-full sm:w-auto" : ""
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/15 to-transparent opacity-60" />
    </button>
  );
}
