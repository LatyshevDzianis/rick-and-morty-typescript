import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { Episode } from "../../../types";
import Pagination from "../../blocks/Pagination";
import { EPISODES } from "../../../graphql/queries/episodes/getAll";
import Loader from "../../blocks/Loader";
import { PagWrapper } from "./style";
import {
  EpisodesData,
  EpisodesVars,
} from "../../../graphql/queries/episodes/getAll";
import CardGrid from "../../layouts/CardsGrid";
import ItemCard from "../../blocks/ItemCard";
import { EPISODES_URL } from "../../../constants/routes";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery<EpisodesData, EpisodesVars>(
    EPISODES,
    {
      variables: { page: currentPage },
    }
  );
  
  const generateEpisodesUrl = (id: number) => `${EPISODES_URL}/${id}`;

  const changeCurrPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error(</p>;

  return (
    <>
      <CardGrid>
        {data &&
          data.episodes.results.map((episode: Episode) => {
            const newObj: Episode = {
              ...episode,
              image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rick_and_Morty_season_1.png/250px-Rick_and_Morty_season_1.png'
            }
            return (<ItemCard key={episode.id} item={newObj} href={generateEpisodesUrl(newObj.id)}/>);
          })}
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
