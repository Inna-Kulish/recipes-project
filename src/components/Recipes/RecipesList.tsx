import styles from "./Recipes.module.scss";
import ad from "@/assets/images/recipes/ad.png";
import Heard from "@/assets/icons/recipes/heard.svg?react";
import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";
import { RecipesProps } from "./Recipes";
import { useState } from "react";

const RecipesList: React.FC<RecipesProps> = ({ category }) => {
    const [onHeardClick, setOnHeardClick] = useState<boolean[]>([]);
    const { data } = useFetch<DataResponse>(`/filter.php?c=${category}`);

    const handleHeardClick = (index:number) => {
        setOnHeardClick((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = !updatedState[index];
            return updatedState;
        });

    }

    return (
<div className={styles.gridBox}>
        <ul id="recipe-list" className={styles.list}>
          {data?.meals.slice(0, 8).map(({ strMeal, strMealThumb, idMeal }, index) => (
            <li key={idMeal} className={styles.item}>
              <img className={styles.photo} src={strMealThumb} alt={strMeal} />
              <button className={styles.btn} onClick={()=> handleHeardClick(index)}>
                <Heard className={`${styles.heardIcon} ${onHeardClick[index] && styles.heardIconActive}`} />
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
);}

export default RecipesList;