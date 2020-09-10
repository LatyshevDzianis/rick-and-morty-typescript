import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import EpisodeItem from "../../blocks/EpisodeItem";
import { Episode } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { EPISODES } from "../../../queries";
import Loader from "../../blocks/Loader";

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

interface EpisodesVars {
  page: number;
}

const Wrapper = styled.div`
  margin-top: 2em;
`;

const PagWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<EpisodesData, EpisodesVars>(
    EPISODES,
    {
      variables: { page: currentPage },
    }
  );

  const changeCurrPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error(</p>;

  return (
    <>
      <Wrapper>
        {data &&
          data.episodes.results.map((episode: Episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
      </Wrapper>
      <PagWrapper>
        {data && (
          <Pagination
            info={data?.episodes.info}
            currentPage={currentPage}
            changeCurrPage={changeCurrPage}
          />
        )}
      </PagWrapper>
    </>
  );
};

export default Episodes;
