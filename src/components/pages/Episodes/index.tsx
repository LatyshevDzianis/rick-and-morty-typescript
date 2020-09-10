import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import EpisodeItem from "../../blocks/EpisodeItem";
import { Episode } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { EPISODES } from "../../../graphql/queries";
import Loader from "../../blocks/Loader";
import { Wrapper, PagWrapper } from "./style";

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
