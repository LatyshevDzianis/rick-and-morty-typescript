import { gql } from "@apollo/client";

import { Episode } from "../../../types";
import { EPISODE_FRAGMENT } from "../../fragments";

export interface EpisodeVars {
  id: number;
}

export interface EpisodeData {
  episode: Episode;
}

export const EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      ...EpisodeFragment
      characters {
        id
        name
        image
      }
    }
  }
  ${EPISODE_FRAGMENT}
`;
