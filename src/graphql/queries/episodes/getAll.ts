import {gql} from '@apollo/client';

import { Episode } from "../../../types";

export interface EpisodesData {
  episodes: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
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
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;