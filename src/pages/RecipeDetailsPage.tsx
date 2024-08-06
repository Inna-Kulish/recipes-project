import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import { DataResponse } from "../utils/types";

const RecipeDetailsPage: React.FC = () => {
  const { recipeId } = useParams();

  const { data, loading, error } = useFetch<DataResponse>(
    `/lookup.php?i=${recipeId}`
  );

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error: ${error}</p>
      ) : (
        <RecipeDetails data={data} />
      )}
    </>
  );
};

export default RecipeDetailsPage;
