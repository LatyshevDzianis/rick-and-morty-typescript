import React, { FunctionComponent, useState, useCallback } from "react";
import { useQuery } from "@apollo/client";

import ItemCard from "../../blocks/ItemCard";
import { Character } from "../../../types";
import Pagination from "../../blocks/Pagination";
import Loader from "../../blocks/Loader";
import {
  CHARACTERS,
  CharactersData,
  CharactersVars,
} from "../../../graphql/queries/characters/getAll";
import { PagWrapper } from "./style";
import CardGrid from "../../layouts/CardsGrid";
import { generateCharactersUrl } from "../../../constants/routes";

const Characters: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<CharactersData, CharactersVars>(
    CHARACTERS,
    {
      variables: { page: currentPage },
    }
  );

  const changeCurrPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <CardGrid>
        {data &&
          data.characters.results.map((character: Character) => (
            <ItemCard
              key={character.id}
              item={character}
              href={generateCharactersUrl(character.id)}
            />
          ))}
      </CardGrid>
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
