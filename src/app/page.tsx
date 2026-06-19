import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import FeaturesGrid from "./components/features-grid";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <FeaturesGrid />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
