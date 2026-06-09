import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import introAnimation from "../lottie/intro.json";

/**
 * Full-screen intro splash. Plays the Lottie immediately on load and holds on
 * its last frame (where the background has faded out, leaving just the logo at
 * the top). The site content is then brought forward beneath the frozen logo.
 */
export default function Splash({ onComplete }: { onComplete: () => void }) {
  const finishedRef = useRef(false);
  const [frozen, setFrozen] = useState(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setFrozen(true); // drop the black backdrop, let the logo's last frame hold
    document.body.style.overflow = ""; // unlock scroll
    onComplete(); // bring the site content forward
  };

  useEffect(() => {
    // Lock scroll while the intro plays.
    document.body.style.overflow = "hidden";

    // Reveal the site content 4s after the intro starts playing.
    const reveal = window.setTimeout(finish, 4000);

    return () => {
      window.clearTimeout(reveal);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`z-[100] flex items-center justify-center transition-colors duration-700 ease-out ${
        frozen
          ? "pointer-events-none absolute left-0 top-0 h-[100svh] w-full bg-transparent"
          : "fixed inset-0 bg-transparent"
      }`}
    >
      <Lottie
        animationData={introAnimation}
        autoplay
        loop={false}
        onComplete={finish}
        className="h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
