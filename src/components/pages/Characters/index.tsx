import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";

import CharacterCard from "../../blocks/CharacterCard";
import { Character } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { CHARACTERS } from "../../../graphql/queries";
import Loader from "../../blocks/Loader";
import { Wrapper, PagWrapper } from "./style";

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
