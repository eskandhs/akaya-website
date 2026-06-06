import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Showcase from "./components/Showcase";
import Engine from "./components/Engine";
import Questions from "./components/Questions";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative w-full bg-bg text-white">
      <Hero />
      <Problem />
      <Showcase />
      <Engine />
      <Questions />
      <Access />
      <Footer />
    </main>
  );
}
