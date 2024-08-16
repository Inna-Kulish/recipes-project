import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import { DataResponse } from "../utils/types";
import Loader from "../components/Loader/Loader";
import { Report } from "notiflix/build/notiflix-report-aio";

const RecipeDetailsPage: React.FC = () => {
  const { recipeId } = useParams();

  const { data, loading, error } = useFetch<DataResponse>(
    `/lookup.php?i=${recipeId}`
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        Report.failure(
          "OPPS",
          "Sorry, there are no recipes matching your search query. Please try again.",
          "Okay"
        )
      ) : (
        <RecipeDetails data={data} />
      )}
    </>
  );
};

export default RecipeDetailsPage;
