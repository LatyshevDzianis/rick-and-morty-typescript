import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import EpisodeItem from "../../blocks/EpisodeItem";
import { Episode } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { EPISODES } from "../../../graphql/queries/episodes/getAll";
import Loader from "../../blocks/Loader";
import { Wrapper, PagWrapper } from "./style";
import {
  EpisodesData,
  EpisodesVars,
} from "../../../graphql/queries/episodes/getAll";

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
