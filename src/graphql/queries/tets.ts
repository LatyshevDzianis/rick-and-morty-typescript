import {gql} from '@apollo/client';

export interface EpisodesData {

}
export interface EpisodesVars {

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