import { gql } from "@apollo/client";

import { Location, Info } from "../../../types";
import { LOCATION_FRAGMENT, INFO_FRAGMENT } from "../../fragments";

export interface LocationsVars {
  page: number;
}

export interface LocationsData {
  locations: {
    info: Info;
    results: Location[];
  };
}

export const LOCATIONS = gql`
  query GetAllLocations($page: Int) {
    locations(page: $page) {
      info {
        ...InfoFragment
      }
      results {
        ...LocationFragment
      }
    }
  }
  ${LOCATION_FRAGMENT}
  ${INFO_FRAGMENT}
`;
