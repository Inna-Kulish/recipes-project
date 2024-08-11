import { useState, useEffect } from "react";
import axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const API_URL = import.meta.env.VITE_URL;

const useFetch = <T>(endpoint: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL + endpoint);

        if (!response.data.meals) {
          Report.failure(
            "OPPS",
            "Sorry, there are no recipes matching your search query. Please try again.",
            "Okay"
          );
          return;
        }

        setData(response.data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
