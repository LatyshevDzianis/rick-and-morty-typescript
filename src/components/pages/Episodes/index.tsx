import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

import EpisodeItem from '../../blocks/EpisodeItem';
import {Episode} from '../../../types';

const Wrapper = styled.div`
  margin-top: 2em;
`;

interface EpisodesData {
  episodes: {
    info: {
      pages: number;
      next: number;
      prev: number;
    };
    results: Episode[];
  };
}

const EPISODES = gql`
  query GetAllEpisodes {
    episodes(page: 1) {
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

const Episodes = () => {
  const { loading, error, data } = useQuery<EpisodesData>(EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error(</p>;

  return (
    <Wrapper>
      {data && data.episodes.results.map((episode: Episode) => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </Wrapper>
  );
};

export default Episodes;
