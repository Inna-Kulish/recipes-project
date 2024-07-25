import { useState, useEffect } from "react";
import axios from "axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const API_URL = "https://www.themealdb.com/api/json/v1/1";

const useFetch = <T>(endpoint: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL+endpoint);

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
