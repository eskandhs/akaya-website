import type { ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

export default function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full px-6 py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
