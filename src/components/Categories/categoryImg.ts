import beef from "../../assets/categories/beef.png";
import breakfast from "../../assets/categories/breakfast.png";
import chicken from "../../assets/categories/chicken.png";
import dessert from "../../assets/categories/dessert.png";
import goat from "../../assets/categories/goat.png";
import lamb from "../../assets/categories/lamb.png";
import miscellaneous from "../../assets/categories/miscellaneous.png";
import pasta from "../../assets/categories/pasta.png";
import pork from "../../assets/categories/pork.png";
import seafood from "../../assets/categories/seafood.png";
import side from "../../assets/categories/side.png";
import starter from "../../assets/categories/starter.png";
import vegan from "../../assets/categories/vegan.png";
import vegetarian from "../../assets/categories/vegetarian.png";

export type CategoryKey =
  | "beef"
  | "breakfast"
  | "chicken"
  | "dessert"
  | "goat"
  | "lamb"
  | "miscellaneous"
  | "pasta"
  | "pork"
  | "seafood"
  | "side"
  | "starter"
  | "vegan"
  | "vegetarian";

export const CATEGORY_IMG: Record<CategoryKey, string> = {
  beef: beef,
  breakfast: breakfast,
  chicken: chicken,
  dessert: dessert,
  goat: goat,
  lamb: lamb,
  miscellaneous: miscellaneous,
  pasta: pasta,
  pork: pork,
  seafood: seafood,
  side: side,
  starter: starter,
  vegan: vegan,
  vegetarian: vegetarian,
};
