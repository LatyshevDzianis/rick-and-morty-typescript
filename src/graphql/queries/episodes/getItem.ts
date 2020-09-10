import { gql } from "@apollo/client";
import { Episode } from "../../../types";

export interface EpisodeVars {
  id: number;
}

export interface EpisodeData {
  episode: Episode;
}

export const EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;
