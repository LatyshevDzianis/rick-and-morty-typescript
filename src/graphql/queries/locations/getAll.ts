import { gql } from "@apollo/client";

import { Location } from "../../../types";

export interface LocationsVars {
  page: number;
}

export interface LocationsData {
  locations: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
    results: Location[];
  };
}

export const LOCATIONS = gql`
  query GetAllLocations($page: Int) {
    locations(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;
