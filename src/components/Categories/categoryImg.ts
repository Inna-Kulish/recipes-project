import beef from "@/assets/images/categories/beef.png";
import breakfast from "@/assets/images/categories/breakfast.png";
import chicken from "@/assets/images/categories/chicken.png";
import dessert from "@/assets/images/categories/dessert.png";
import goat from "@/assets/images/categories/goat.png";
import lamb from "@/assets/images/categories/lamb.png";
import miscellaneous from "@/assets/images/categories/miscellaneous.png";
import pasta from "@/assets/images/categories/pasta.png";
import pork from "@/assets/images/categories/pork.png";
import seafood from "@/assets/images/categories/seafood.png";
import side from "@/assets/images/categories/side.png";
import starter from "@/assets/images/categories/starter.png";
import vegan from "@/assets/images/categories/vegan.png";
import vegetarian from "@/assets/images/categories/vegetarian.png";

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
