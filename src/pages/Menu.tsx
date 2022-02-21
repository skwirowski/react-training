import Default from "pages/Default";
import Movies from "pages/Movies";
import People from "pages/People";
import { useState } from "react";
import styled from "styled-components";

type Pages = {
  movies: string;
  people: string;
  default: string;
};

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export default function Menu() {
  const [currentPage, setCurrentPage] = useState("default");
  const pages: Pages = {
    movies: "movies",
    people: "people",
    default: "default",
  };

  const handleClick = (page: keyof Pages) => () => {
    setCurrentPage(pages[page]);
  };

  const displayPage = (page: string) => {
    switch (page) {
      case "movies":
        return <Movies />;
      case "people":
        return <People />;
      default:
        return <Default isCentered={true} />;
    }
  };

  return (
    <div>
      <Wrapper>
        <button onClick={handleClick("movies")}>Movies</button>
        <button onClick={handleClick("people")}>People</button>
      </Wrapper>
      {displayPage(currentPage)}
    </div>
  );
}
