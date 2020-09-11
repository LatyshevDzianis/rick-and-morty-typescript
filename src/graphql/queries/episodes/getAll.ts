import { gql } from "@apollo/client";

import { Episode, Info } from "../../../types";
import { EPISODE_FRAGMENT, INFO_FRAGMENT } from "../../fragments";

export interface EpisodesData {
  episodes: {
    info: Info;
    results: Episode[];
  };
}

export interface EpisodesVars {
  page: number;
}

export const EPISODES = gql`
  query GetAllEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        ...InfoFragment
      }
      results {
        ...EpisodeFragment
      }
    }
  }
  ${EPISODE_FRAGMENT}
  ${INFO_FRAGMENT}
`;
