import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Character, Episode } from "../../../types";
import { LOCATIONS_URL, EPISODES_URL } from "../../../constants/routes";

interface CharacterVars {
  id: number;
}

interface CharacterData {
  character: Character;
}

const CharacterWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  gap: 2em;
  flex-wrap: wrap;
`;

const CharacterImage = styled.img`
  flex: 1;
`

const CharacterInfo = styled.div`
  font-size: 1em;
  flex: 3;
`;

const CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
      species
      episode {
        id
        name
      }
      origin {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(
    CHARACTER,
    { variables: { id: id } }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error (</p>;

  return (
    <>
      {data && (
        <CharacterWrapper>
          <CharacterImage src={data.character.image} alt={data.character.name} />
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
              {data.character.episode?.map((episode: Episode, index: number) => (
                <Link key={episode.id} to={`${EPISODES_URL}/${episode.id}`}>
                  {episode.name}
                  {', '}
                </Link>
              ))}
            </p>
          </CharacterInfo>
        </CharacterWrapper>
      )}
    </>
  );
};

export default CharacterDetails;
