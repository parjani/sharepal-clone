import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import FAQ from "./components/FAQ";
import Stats from "./components/Stats";
import RelatedCategories from "./components/RelatedCategories";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <CategorySection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ProductGrid
          activeCategory={activeCategory}
        />

        <FAQ />

        <Testimonials />

        <Stats />

        <RelatedCategories />

        <Footer />
      </main>
    </>
  );
}

export default App;