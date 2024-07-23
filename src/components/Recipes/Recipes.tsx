import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";
import styles from "./Recipes.module.scss";
import ad from "../../assets/ad.png";
import Heard from "../../assets/heard.svg?react";

const Recipes = () => {
  const { data } = useFetch<DataResponse>(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=Carrots"
  );
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Simple and tasty recipes</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
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
