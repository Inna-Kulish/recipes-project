import React from "react";
import useFetch from "../../hooks/useFetch";
import { DataResponse } from "../../utils/types";
import styles from "./Hero.module.scss";
import recipe from "@/assets/images/hero/recipe.png";
import world from "@/assets/icons/hero/world.svg";
import fork from "@/assets/icons/hero/fork-knife.svg";
import photo from "@/assets/images/hero/photo.png";
import defaultPhoto from "@/assets/images/hero/defaultPhoto.png";
import badgeTab from "@/assets/images/hero/badge_tab.png";
import badgeDesc from "@/assets/images/hero/badge_desc.png";
import Play from "@/assets/icons/hero/play-circle.svg?react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { data } = useFetch<DataResponse>("/random.php");

  return (
    <div className={`${styles.heroContainer}`}>
      <div className={styles.descWrap}>
        <p className={styles.hotRecipe}>
          <img src={recipe} alt="recipe" width="24px" height="24px"/>
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
            <img src={photo} alt="men" width="50px" height="50px"/>
            <div className={styles.authorDesc}>
              <p className={styles.name}>John Smith</p>
              <p className={styles.date}>15 March 2022</p>
            </div>
          </div>
          <Link to={`/recipes/${data?.meals[0].idMeal}`} className={styles.moreBtn}>
            View Recipes
            <Play />
          </Link>
        </div>
      </div>
     
      <img src={data?.meals[0].strMealThumb ?? defaultPhoto} alt="meal" className={styles.imgMeal} />
      
      <div className={styles.badge}>
        <picture>
        <source media="(min-width: 1060px)" srcSet={badgeDesc} type="image/png" width="150px" height="150px"/>
        <source media="(max-width: 1059px)" srcSet={badgeTab} type="image/png" width="75px" height="75px"/>
        <img src={badgeTab} alt="badge" width="75px" height="75px"/>
      </picture>
      </div>
    </div>
  );
};

export default Hero;
