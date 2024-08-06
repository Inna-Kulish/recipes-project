interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strCategory?: string;
  strArea?: string;
  strYoutube?: string;
  strTags?: string;
}

export interface DataResponse {
  meals: Meal[];
}

interface Category {
  strCategory: string;
}

export interface CategoryData {
  meals: Category[];
}
