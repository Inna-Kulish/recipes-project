import React from "react";
import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";
import styles from "./Recipes.module.scss";
import ad from "@/assets/images/recipes/ad.png";
import Heard from "@/assets/icons/recipes/heard.svg?react";
import DescribeSection from "../DescribeSection/DescribeSection";

interface RecipesProps {
  category: string;
}

const Recipes: React.FC<RecipesProps> = ({ category }) => {
  const { data } = useFetch<DataResponse>(`/filter.php?c=${category}`);

  return (
    <div className={styles.container}>
      <div className={styles.DescWrap}>
        <DescribeSection
          title="Simple and tasty recipes"
          describe="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        />
      </div>
      <div className={styles.gridBox}>
        <ul className={styles.list}>
          {data?.meals.slice(0, 8).map(({ strMeal, strMealThumb, idMeal }) => (
            <li key={idMeal} className={styles.item}>
              <img className={styles.photo} src={strMealThumb} alt={strMeal} />
              <button className={styles.btn}>
                <Heard />
              </button>
              <h3 className={styles.name}>{strMeal}</h3>
            </li>
          ))}
        </ul>
        <div className={styles.adWrap}>
          <h4 className={styles.adTitle}>Don’t forget to eat healthy food</h4>
          <img className={styles.adImg} src={ad} alt="plate with food" />
          <a href="/" className={styles.link}>
            www.foodieland.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
