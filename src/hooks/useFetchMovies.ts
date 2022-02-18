import { useEffect, useState } from 'react';

export default function useFetchMovies<T>(): [movies: null | T[], isLoading: boolean] {
  const [movies, setMovies] = useState<null | T[]>(null);
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
    let shouldCancel = false;

    // cancel request in open fetch function for unmounted components
    // react query, apollo client

    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => !shouldCancel && setMovies(data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))

    return () => {
      shouldCancel = true;
    }
  }, [])

  // useEffect(() => {
  //  const fetchData = async () => {
  //    try {
        // setLoading(true)
  //   const data = await fetch('https://ghibliapi.herokuapp.com/films');
  // } catch (error) {
  //   console.log(error);

  // } finally {
      // setLoading(false)
  // }
  //  }

  //  fetchData();
  // }, [])

  return [ movies, isLoading ]
}