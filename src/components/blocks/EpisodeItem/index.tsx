import React from "react";
import styled from "styled-components";

import { Episode } from "../../../types";

interface EpisodeItemProps {
  episode: Episode;
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 5px 10px;
`;

const EpisodeItem = (props: EpisodeItemProps) => {
  const episode = props.episode;

  return (
    <ItemWrapper>
      <div>{episode.name}</div>
      <div>{episode.episode}</div>
      <div>{episode.air_date}</div>
    </ItemWrapper>
  );
};

export default EpisodeItem;
