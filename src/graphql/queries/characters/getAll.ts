import { gql } from "@apollo/client";

import { Character, Info } from "../../../types";
import { CHARACTER_FRAGMENT, INFO_FRAGMENT } from "../../fragments";

export interface CharactersData {
  characters: {
    info: Info;
    results: Character[];
  };
}

export interface CharactersVars {
  page: number;
}

export const CHARACTERS = gql`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        ...InfoFragment
      }
      results {
        ...CharacterFragment
      }
    }
  }
  ${CHARACTER_FRAGMENT}
  ${INFO_FRAGMENT}
`;
