import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setTypes([]);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return (
            setError(`HTTP Status Error: ${response.status}`), console.log(url)
          );
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setRestaurants(json);
      })
      .catch((error) => {
        setError(`${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { restaurants, isLoading, error, types };
}
