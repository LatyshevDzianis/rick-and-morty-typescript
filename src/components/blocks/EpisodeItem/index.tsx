import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Episode } from "../../../types";
import { EPISODES_URL } from "../../../constants/routes";

interface EpisodeItemProps {
  episode: Episode;
}

const Item = styled.div`
  flex: 2
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  flex-wrap: wrap;
  padding: 5px 10px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CustomLink = styled(Link)``;

const EpisodeItem = (props: EpisodeItemProps) => {
  const episode = props.episode;

  return (
    <CustomLink to={`${EPISODES_URL}/${episode.id}`}>
      <ItemWrapper>
        <Item>{episode.name}</Item>
        <Item className="episode">{episode.episode}</Item>
        <Item>{episode.air_date}</Item>
      </ItemWrapper>
    </CustomLink>
  );
};

export default EpisodeItem;
