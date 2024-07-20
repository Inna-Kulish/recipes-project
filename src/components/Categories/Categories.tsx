import useFetch from "../../hooks/useFetch";
import { CategoryData } from "../../utils/types";
import { CATEGORY_IMG, CategoryKey } from "./categoryImg";

const Categories = () => {
    const { data } = useFetch<CategoryData>("https://www.themealdb.com/api/json/v1/1/list.php?c=list");

    return (
        <>
            <h2>Categories</h2>
            <ul>
                {data?.meals.map(({ strCategory }, index) => (
                    <li key={`${strCategory}_${index}`}>
                        <img src={CATEGORY_IMG[strCategory.toLowerCase() as CategoryKey]} alt={strCategory} />
                        {strCategory}</li>
                )
                )}
            </ul>
        </>
    )
}

export default Categories;