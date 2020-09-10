import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Episode, Character } from "../../../types";
import CharacterCard from "../../blocks/CharacterCard";
import { EPISODE } from "../../../queries";

interface EpisodeVars {
  id: number;
}

interface EpisodeData {
  episode: Episode;
}

const Wrapper = styled.div`
  margin-top: 2em;
`;

const CharacterCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const CharactersTitle = styled.div`
  text-align: center;
`;

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
