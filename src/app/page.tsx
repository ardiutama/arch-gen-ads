import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import FeaturesGrid from "./components/features-grid";
import InsideTheEngine from "./components/inside-the-engine";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InsideTheEngine />
        <Portfolio />
        <FeaturesGrid />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
