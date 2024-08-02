import React from "react";
import styles from "./Recipes.module.scss";
import DescribeSection from "../DescribeSection/DescribeSection";
import RecipesList from "./RecipesList";

export interface RecipesProps {
  category: string;
}

const Recipes: React.FC<RecipesProps> = ({ category }) => {

  return (
    <div className={styles.container}>
      <div className={styles.DescWrap}>
        <DescribeSection
          title="Simple and tasty recipes"
          describe="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        />
      </div>
      <RecipesList category={category} />
    </div>
  );
};

export default Recipes;
