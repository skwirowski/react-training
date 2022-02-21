import PersonCard from "components/PersonCard";
import Person from "interfaces/Person";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Loader = styled.span`
  display: block;
  text-align: center;
  margin: 30px;
`;

export default function People() {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const lastCardRef = useRef<Element>(null);

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
    }, 2000);

    return () => {
      shouldCancel = true;
    };
  }, [currentPage]);

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
              <PersonCard key={person.email} ref={lastCardRef}>
                {person.name.first} {person.name.last}
              </PersonCard>
            );
          }
          return (
            <PersonCard key={person.email}>
              {person.name.first} {person.name.last}
            </PersonCard>
          );
        })}
      <Loader>Loading ...</Loader>
    </div>
  );
}
