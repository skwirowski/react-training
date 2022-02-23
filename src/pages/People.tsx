import Loader from "components/Loader";
import PersonCard from "components/PersonCard";
import useFetchPeople from "hooks/useFetchPeople";
import Person from "interfaces/Person";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function People() {
  const [currentPage, setCurrentPage] = useState(1);
  const [people, isLoading] = useFetchPeople<Person>(currentPage);
  const lastCardRef = useRef<Element>(null);

  useEffect(() => {
    // intersection observer
    // react virtualize
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setCurrentPage((prevState) => prevState + 1);
      }
    });

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }
  }, [people]);

  return (
    <div>
      {people.length > 0 &&
        people?.map((person, index) => {
          if (index === people.length - 1) {
            return (
              <PersonCard key={person.email} data={person} ref={lastCardRef} />
            );
          }
          return <PersonCard key={person.email} data={person} />;
        })}

      {!isLoading && people?.length === 0 && <div>There&apos;s no data.</div>}

      {isLoading && (
        <Wrapper>
          <Loader />
        </Wrapper>
      )}
    </div>
  );
}
