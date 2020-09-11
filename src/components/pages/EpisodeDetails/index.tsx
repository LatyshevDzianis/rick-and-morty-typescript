import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Character } from "../../../types";
import ItemCard from "../../blocks/ItemCard";
import { Wrapper, CharactersTitle } from "./style";
import {
  EPISODE,
  EpisodeData,
  EpisodeVars,
} from "../../../graphql/queries/episodes/getItem";
import Loader from "../../blocks/Loader";
import { generateCharactersUrl } from "../../../constants/routes";
import CardsGrid from "../../layouts/CardsGrid";

const EpisodeDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<EpisodeData, EpisodeVars>(EPISODE, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data && (
        <Wrapper>
          <p>Name: {data.episode.name}</p>
          <p>Air date: {data.episode.air_date}</p>
          <p>Episode code: {data.episode.episode}</p>
          <CharactersTitle>
            <p>Characters of episode</p>
            <CardsGrid>
              {data.episode.characters?.map((character: Character) => (
                <ItemCard
                  key={character.id}
                  item={character}
                  href={generateCharactersUrl(character.id)}
                />
              ))}
            </CardsGrid>
          </CharactersTitle>
        </Wrapper>
      )}
    </>
  );
};

export default EpisodeDetails;
