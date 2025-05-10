
import { useState, useEffect } from "react";
import { recipes } from "@/lib/data";
import Hero from "@/components/Hero";
import FilterTabs from "@/components/FilterTabs";
import MasonryGrid from "@/components/MasonryGrid";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(recipe => recipe.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <Hero />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <FilterTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <MasonryGrid recipes={filteredRecipes} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
