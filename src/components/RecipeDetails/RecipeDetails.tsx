/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./RecipeDetails.module.scss";
import world from "@/assets/icons/hero/world.svg";
import fork from "@/assets/icons/hero/fork-knife.svg";
import { DataResponse } from "../../utils/types";

interface RecipeDetailsProps {
  data: DataResponse | null;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ data }) => {
  
  const meal = data?.meals[0];
  const ingredients = [];
  const video = meal?.strYoutube?.replace("watch?v=", "embed/");
  const backgroundImage = meal ? `linear-gradient( to left, rgba(231, 249, 253, 0.3), rgba(231, 249, 253, 1)), url(${meal.strMealThumb})` : '';


  for (let i = 1; i <= 20; i++) {
    const ingredient = (meal as any)[`strIngredient${i}`];
    const measure = (meal as any)[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({ measure, ingredient });
    }
  }

  return (
    <div className={styles.container}>
      <div style={{backgroundImage}} className={styles.mainWrap}>
        <div className={styles.descWrap}>
          <h2 className={styles.title}>{meal?.strMeal}</h2>

          <div className={styles.wrap}>
            <p>
              <img src={fork} alt="fork and knife" width="24px" height="24px" />
              {meal?.strCategory}
            </p>
            <p>
              <img src={world} alt="world" width="24px" height="24px" />
              {meal?.strArea}
            </p>
            {meal?.strTags?.split(',').map((tag, index) => (
              tag.trim() && <p key={`${tag}_${index}`}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.ingredientsWrap}>
        <h3 className={styles.ingredientTitle}>INGREDIENTS:</h3>
        <ul className={styles.list}>
          {ingredients.map(({ measure, ingredient }, index) => (
            <li className={styles.item} key={`${ingredient}_${index}`}>
              <p className={styles.mesure}>{measure}</p>
              <p className={styles.ingredient}>{ingredient}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cookingWrap}>
        <h3 className={styles.ingredientTitle}>COOKING:</h3>
        <p>{meal?.strInstructions}</p>
      </div>
      <div className={styles.videoWrap}>
        {video ? (
<iframe
          src={video}
          title="Teriyaki Salmon with Soba Noodle Salad | Gordon Ramsay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        ) : (
          <img
          src={meal?.strMealThumb}
          alt={meal?.strMeal}
          className={styles.imgMealVideo}
        />  
        )}
        
      </div>
    </div>
  );
};

export default RecipeDetails;
