import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCategory = (url: string) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<string[]>(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchCategory;
