import { gql } from "@apollo/client";

import { Location } from "../../../types";
import { LOCATION_FRAGMENT } from "../../fragments";

export interface LocationVars {
  id: number;
}

export interface LocationData {
  location: Location;
}

export const LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      ...LocationFragment
      residents {
        id
        name
        image
      }
    }
  }
  ${LOCATION_FRAGMENT}
`;
