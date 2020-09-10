import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";

import CharacterCard from "../../blocks/CharacterCard";
import { Character } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { CHARACTERS } from "../../../graphql/queries/characters/getAll";
import Loader from "../../blocks/Loader";
import {
  CharactersData,
  CharactersVars,
} from "../../../graphql/queries/characters/getAll";
import { Wrapper, PagWrapper } from "./style";

const Characters: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<CharactersData, CharactersVars>(
    CHARACTERS,
    {
      variables: { page: currentPage },
    }
  );

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
