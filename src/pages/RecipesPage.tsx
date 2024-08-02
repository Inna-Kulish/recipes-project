import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import RecipesList from "../components/Recipes/RecipesList";

const RecipesPage: React.FC = () => {
  const DEFAULT_CATEGORY = "Beef";
  const [selectedCategory, setSelectedCategory] =
    useState<string>(DEFAULT_CATEGORY);

  return (
    <>
      <Categories onSelectCategory={setSelectedCategory} />
      <RecipesList category={selectedCategory} />
    </>
  );
};

export default RecipesPage;
