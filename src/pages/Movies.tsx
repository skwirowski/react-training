import Loader from "components/Loader";
import MovieCard from "components/MovieCard";
import useFetchMovies from "hooks/useFetchMovies";
import Movie from "interfaces/Movie";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
      {isLoading && (
        <Wrapper>
          <Loader />
        </Wrapper>
      )}
      {movies?.map((movie) => (
        <MovieCard key={movie.id} data={movie} isCentered={true} />
      ))}

      {!isLoading && movies?.length === 0 && <div>There&apos;s no data.</div>}
    </div>
  );
}
