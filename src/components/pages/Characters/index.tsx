import React, { FunctionComponent } from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterCard from "../../blocks/CharacterCard";
import styled from "styled-components";
import { Character } from "../../../types";

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

const CHARACTERS = gql`
  query GetAllCharacters {
    characters(page: 1) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        location {
          name
        }
        image
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
`;

const Characters: FunctionComponent = () => {
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error(</p>;

  return (
    <Wrapper>
      {data &&
        data.characters.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </Wrapper>
  );
};

export default Characters;
