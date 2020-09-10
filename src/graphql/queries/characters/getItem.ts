import { gql } from "@apollo/client";

import { Character } from "../../../types";

export interface CharacterVars {
  id: number;
}

export interface CharacterData {
  character: Character;
}

export const CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      location {
        id
        name
      }
      episode {
        id
        name
      }
      origin {
        id
        name
      }
    }
  }
`;
