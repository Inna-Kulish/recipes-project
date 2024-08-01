import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Recipes from "../components/Recipes/Recipes";
import LearnMore from "../components/LearnMore/LearnMore";
import Subscribe from "../components/Subscribe/Subscribe";

const Home: React.FC = () => {
  const DEFAULT_CATEGORY = "Beef";
  const [selectedCategory, setSelectedCategory] = useState<string>(DEFAULT_CATEGORY);
  
  return (
    <>
      <Hero />
      <Categories onSelectCategory={setSelectedCategory} />
      <Recipes category={selectedCategory} />
      <LearnMore />
      <Subscribe/>
    </>
  );
};

export default Home;
