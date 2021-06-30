import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => setError(err.message));
      setIsLoading(false);
    }, 1000);
  }, [url]);

  return { setData, data, isLoading, error };
};

export default useFetch;
