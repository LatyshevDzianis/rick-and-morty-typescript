import { gql } from "@apollo/client";

import { Character } from "../../../types";
import {CHARACTER_FRAGMENT} from '../../fragments';

export interface CharacterVars {
  id: number;
}

export interface CharacterData {
  character: Character;
}

export const CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterFragment
      gender
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
  ${CHARACTER_FRAGMENT}
`;
