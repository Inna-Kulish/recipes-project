import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import RecipesList from "../components/Recipes/RecipesList";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../hooks/useFetch";
import { DataResponse } from "../utils/types";
import LoadMore from "../components/LoadMore/LoadMore";
import Loader from "../components/Loader/Loader";
import { Report } from "notiflix/build/notiflix-report-aio";

const RecipesPage: React.FC = () => {
  const DEFAULT_CATEGORY = "Beef";
  const LOADMORE_NUMBER = 9;
  const [selectedCategory, setSelectedCategory] = useState<string>(DEFAULT_CATEGORY);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleRecipeCount, setVisibleRecipeCount] = useState(8);

  const {
    data: categoryData,
    loading: loadingCategory,
    error: errorCategory,
  } = useFetch<DataResponse>(`/filter.php?c=${selectedCategory}`);
  const {
    data: searchData,
    loading: loadingSearch,
    error: errorSearch,
  } = useFetch<DataResponse>(`/search.php?s=${searchQuery}`);

  const recipes = searchQuery ? searchData : categoryData;
  const isLoading = loadingCategory || loadingSearch;
  const hasError = errorCategory || errorSearch;

  const handleSearchSubmit = (query: string) => {
    setVisibleRecipeCount(8);
    setSearchQuery(query);
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery("");
    setVisibleRecipeCount(8);
    setSelectedCategory(category);
  };

  const handleLoadMore = () => {
    setVisibleRecipeCount((prevCount) => prevCount + LOADMORE_NUMBER);
  };

  return (
    <>
      <SearchForm q={searchQuery} onSubmit={handleSearchSubmit} />
      <Categories onCategoryClick={handleCategoryClick} />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        Report.failure(
          "OPPS",
          "Something went wrong! Please restart the page. Thank you.",
          "Okay"
        )
      ) : (
        <>
          <RecipesList data={recipes} visibleRecipeCount={visibleRecipeCount} />
          {recipes?.meals && recipes.meals.length > visibleRecipeCount && (
            <LoadMore onClick={handleLoadMore} />
          )}
        </>
      )}
    </>
  );
};

export default RecipesPage;
