import { useState } from "react";
import Splash from "./components/Splash";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Showcase from "./components/Showcase";
import Engine from "./components/Engine";
import Questions from "./components/Questions";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <Splash onComplete={() => setRevealed(true)} />
      <main className="relative w-full bg-bg text-white">
        <Hero revealed={revealed} />
        <Problem />
        <Showcase />
        <Engine />
        <Questions />
        <Access />
        <Footer />
      </main>
    </>
  );
}
