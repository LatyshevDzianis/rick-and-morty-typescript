import React from "react";

import { Character, Location, Episode } from "../../../types";
import { ItemName, ItemWrapper } from "./style";

interface ItemCardProps {
  item: Character | Episode | Location;
  href: string;
}

const ItemCard = ({ href, item: { image, name } }: ItemCardProps) => (
  <ItemName to={href}>
    <ItemWrapper>
      <img width="100px" src={image} alt={name} />
      <span>{name}</span>
    </ItemWrapper>
  </ItemName>
);

export default ItemCard;
