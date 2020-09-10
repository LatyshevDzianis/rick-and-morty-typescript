import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import CharacterCard from "../../blocks/CharacterCard";
import { Character } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { CHARACTERS } from "../../../queries";
import Loader from "../../blocks/Loader";

interface CharactersData {
  characters: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
    results: Character[];
  };
}

interface CharactersVars {
  page: number;
}

const Wrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const PagWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Characters: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS, {
    variables: { page: currentPage },
  });

  const changeCurrPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error(</p>;

  return (
    <>
      <Wrapper>
        {data &&
          data.characters.results.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </Wrapper>
      <PagWrapper>
        {data && (
          <Pagination
            info={data?.characters.info}
            currentPage={currentPage}
            changeCurrPage={changeCurrPage}
          />
        )}
      </PagWrapper>
    </>
  );
};

export default Characters;
