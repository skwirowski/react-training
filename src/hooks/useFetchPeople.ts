import { useEffect, useState } from "react";

export default function useFetchPeople<T>(
  currentPage = 1
): [people: T[], isLoading: boolean] {
  const [people, setPeople] = useState<T[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    let shouldCancel = false;
    setTimeout(() => {
      fetch(`https://randomuser.me/api/?page=${currentPage}&results=10`)
        .then((response) => response.json())
        .then((data) => {
          !shouldCancel &&
            setPeople((prevState) => [...prevState, ...data.results]);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, 1000);

    return () => {
      shouldCancel = true;
    };
  }, [currentPage]);

  return [people, isLoading];
}
