import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to elements with the `reveal` class once they scroll into
 * view. Honors prefers-reduced-motion (reveal is a no-op there via CSS).
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = [
      ...(root.classList.contains("reveal") ? [root] : []),
      ...Array.from(root.querySelectorAll<HTMLElement>(".reveal")),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
