import { gql } from "@apollo/client";

import { Character } from "../../../types";

export interface CharactersData {
  characters: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
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
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        location {
          id
          name
        }
      }
    }
  }
`;
