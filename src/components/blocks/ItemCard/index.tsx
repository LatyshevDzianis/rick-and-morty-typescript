import React from "react";

import { Character, Location, Episode } from "../../../types";
import { ItemName, ItemWrapper } from "./style";

interface ItemCardProps {
  item: Character | Episode | Location;
  href: string;
}

const ItemCard = (props: ItemCardProps) => (
  <ItemName to={props.href}>
    <ItemWrapper>
      <img width="100px" src={props.item.image} alt={props.item.name} />
      <span>{props.item.name}</span>
    </ItemWrapper>
  </ItemName>
);

export default ItemCard;
