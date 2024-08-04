import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import RecipesList from "../components/Recipes/RecipesList";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../hooks/useFetch";
import { DataResponse } from "../utils/types";

const RecipesPage: React.FC = () => {
  const DEFAULT_CATEGORY = "Beef";
  const [selectedCategory, setSelectedCategory] =
    useState<string>(DEFAULT_CATEGORY);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const isLoading = loadingCategory || loadingSearch;
  const hasError = errorCategory || errorSearch;

  return (
    <>
      <SearchForm q={searchQuery} onSubmit={setSearchQuery} />
          <Categories clearSearch={setSearchQuery} onSelectCategory={setSelectedCategory} />
      {isLoading ? (
        <p>loading...</p>
      ) : hasError ? (
        <p>Error: {hasError}</p>
      ) : (
        <RecipesList data={searchQuery ? searchData : categoryData} />
      )}
    </>
  );
};

export default RecipesPage;
