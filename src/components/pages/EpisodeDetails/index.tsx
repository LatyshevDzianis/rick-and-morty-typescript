import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Episode, Character } from "../../../types";
import CharacterCard from "../../blocks/CharacterCard";
import { EPISODE } from "../../../graphql/queries";
import { Wrapper, CharactersTitle, CharacterCardsWrapper } from "./style";

interface EpisodeVars {
  id: number;
}

interface EpisodeData {
  episode: Episode;
}

const EpisodeDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<EpisodeData, EpisodeVars>(EPISODE, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error (</p>;

  return (
    <>
      {data && (
        <Wrapper>
          <p>Name: {data.episode.name}</p>
          <p>Air date: {data.episode.air_date}</p>
          <p>Episode code: {data.episode.episode}</p>
          <CharactersTitle>
            <p>Characters of episode</p>
            <CharacterCardsWrapper>
              {data.episode.characters?.map((character: Character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </CharacterCardsWrapper>
          </CharactersTitle>
        </Wrapper>
      )}
    </>
  );
};

export default EpisodeDetails;
