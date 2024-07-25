import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Recipes from "../components/Recipes/Recipes";
import { useState } from "react";

const Home = () => {
  const defaultCategory = "Beef";
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);

  return (
    <>
      <Hero />
      <Categories onSelectCategory={setSelectedCategory} />
      <Recipes category={selectedCategory} />
    </>
  );
};

export default Home;
