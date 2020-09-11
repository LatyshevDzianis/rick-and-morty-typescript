import React, { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";

import { Episode } from "../../../types";
import Pagination from "../../blocks/Pagination";
import Loader from "../../blocks/Loader";
import { PagWrapper } from "./style";
import {
  EPISODES,
  EpisodesData,
  EpisodesVars,
} from "../../../graphql/queries/episodes/getAll";
import CardGrid from "../../layouts/CardsGrid";
import ItemCard from "../../blocks/ItemCard";
import { generateEpisodesUrl } from "../../../constants/routes";
import { EPISODE_IMAGE } from "../../../constants/images";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<EpisodesData, EpisodesVars>(
    EPISODES,
    {
      variables: { page: currentPage },
    }
  );

  const changeCurrPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <CardGrid>
        {data &&
          data.episodes.results.map((episode: Episode) => (
            <ItemCard
              key={episode.id}
              href={generateEpisodesUrl(episode.id)}
              item={{
                ...episode,
                image: EPISODE_IMAGE,
              }}
            />
          ))}
      </CardGrid>
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
