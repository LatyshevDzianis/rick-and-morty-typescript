import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Character, Episode } from "../../../types";
import { LOCATIONS_URL, EPISODES_URL } from "../../../constants/routes";
import { CHARACTER } from "../../../queries";
import Loader from "../../blocks/Loader";

interface CharacterVars {
  id: number;
}

interface CharacterData {
  character: Character;
}

const CharacterWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterImage = styled.img`
  width: 300px;
  height: 300px;
`;

const CharacterInfo = styled.div`
  font-size: 1em;
`;

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(
    CHARACTER,
    { variables: { id: id } }
  );

  if (loading) return <Loader />;
  if (error) return <p>Error (</p>;

  return (
    <>
      {data && (
        <CharacterWrapper>
          <CharacterImage
            src={data.character.image}
            alt={data.character.name}
          />
          <CharacterInfo>
            <p>Name: {data.character.name}</p>
            <p>Status: {data.character.status}</p>
            <p>Species: {data.character.species}</p>
            <p>Gender: {data.character.gender}</p>
            <p>
              Origin:{" "}
              <Link to={`${LOCATIONS_URL}/${data.character.origin.id}`}>
                {data.character.origin.name}
              </Link>
            </p>
            <p>
              Last location:{" "}
              <Link to={`${LOCATIONS_URL}/${data.character.location.id}`}>
                {data.character.location.name}
              </Link>
            </p>
            <p>
              Episodes:{" "}
              {data.character.episode?.map(
                (episode: Episode, index: number) => (
                  <Link key={episode.id} to={`${EPISODES_URL}/${episode.id}`}>
                    {episode.name}
                    {", "}
                  </Link>
                )
              )}
            </p>
          </CharacterInfo>
        </CharacterWrapper>
      )}
    </>
  );
};

export default CharacterDetails;
