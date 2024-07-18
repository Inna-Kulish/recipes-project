import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";
import styles from "./Hero.module.scss";
import recipe from "../../assets/recipe.png";
import world from "../../assets/world.svg";
import fork from "../../assets/fork-knife.svg";
import photo from "../../assets/photo.png";
import Play from "../../assets/play-circle.svg?react";

const Hero = () => {
  const { data } = useFetch<DataResponse>(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  return (
    <div className={`${styles.heroContainer}`}>
      <div className={styles.descWrap}>
        <p className={styles.hotRecipe}>
          <img src={recipe} alt="recipe" />
          Hot Recipes
        </p>
        <h2 className={styles.title}>{data?.meals[0].strMeal}</h2>
        <p className={styles.describe}>{data?.meals[0].strInstructions}</p>

        <div className={styles.wrap}>
          <p>
            <img src={fork} alt="fork and knife" width="24px" height="24px" />
            {data?.meals[0].strCategory}
          </p>
          <p>
            <img src={world} alt="world" width="24px" height="24px" />
            {data?.meals[0].strArea}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.authorBox}>
            <img src={photo} alt="men" />
            <div className={styles.authorDesc}>
              <p className={styles.name}>John Smith</p>
              <p className={styles.date}>15 March 2022</p>
            </div>
          </div>
          <button className={styles.moreBtn}>
            View Recipes
            <Play />
          </button>
        </div>
      </div>
     
        <img src={data?.meals[0].strMealThumb} alt="meal" className={styles.imgMeal} />
      
    </div>
  );
};

export default Hero;
