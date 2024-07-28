import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Recipes from "../components/Recipes/Recipes";
import LearnMore from "../components/LearnMore/LearnMore";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
  const defaultCategory = "Beef";
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);

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
