import React, { useMemo } from "react";
import styles from "./Recipes.module.scss";
import DescribeSection from "../DescribeSection/DescribeSection";
import RecipesList from "./RecipesList";
import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";

interface RecipesProps {
  category: string;
}

const Recipes: React.FC<RecipesProps> = ({ category }) => {
  const { data } = useFetch<DataResponse>(`/filter.php?c=${category}`);

  const filteredRecipes = useMemo(() => {
    return { meals: data?.meals || [] };
  }, [data]);
  
  return (
    <div className={styles.container}>
      <div className={styles.DescWrap}>
        <DescribeSection
          title="Simple and tasty recipes"
          describe="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        />
      </div>
      <RecipesList data={filteredRecipes} />
    </div>
  );
};

export default Recipes;
