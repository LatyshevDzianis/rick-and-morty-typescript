import { gql } from "@apollo/client";

import { Location } from "../../../types";

export interface LocationVars {
  id: number;
}

export interface LocationData {
  location: Location;
}

export const LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;
