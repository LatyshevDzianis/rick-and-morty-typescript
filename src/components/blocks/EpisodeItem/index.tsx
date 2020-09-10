import React from "react";
import { Link } from "react-router-dom";

import { Episode } from "../../../types";
import { EPISODES_URL } from "../../../constants/routes";
import { ItemWrapper, Item } from "./style";

interface EpisodeItemProps {
  episode: Episode;
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const episode = props.episode;

  return (
    <Link to={`${EPISODES_URL}/${episode.id}`}>
      <ItemWrapper>
        <Item>{episode.name}</Item>
        <Item className="episode">{episode.episode}</Item>
        <Item>{episode.air_date}</Item>
      </ItemWrapper>
    </Link>
  );
};

export default EpisodeItem;
