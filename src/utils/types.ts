interface Meal {
        strMeal: string;
        strInstructions: string;
        strCategory: string;
        strArea: string;
        strMealThumb: string;
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
