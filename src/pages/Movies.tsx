import MovieCard from 'components/MovieCard';
import useFetchMovies from 'hooks/useFetchMovies';
import Movie from 'interfaces/Movie';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [count, setCount] = useState(0);
  const [movies, isLoading] = useFetchMovies<Movie>();

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <div>
      {count}
      {isLoading && <div>Loading ...</div>}
      {movies?.map((movie) => (
        <MovieCard key={movie.id} data={movie} isCentered={true} />
      ))}

      {!isLoading && movies?.length === 0 && <div>There&apos;s no data.</div>}
    </div>
  );
}