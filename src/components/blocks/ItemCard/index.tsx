import React from "react";

import { Character, Location, Episode } from "../../../types";
import { CHARACTERS_URL } from "../../../constants/routes";
import { CharacterName, CharacterWrapper } from "./style";

interface ItemCardProps {
  item: Character | Episode | Location;
}

const ItemCard = (props: ItemCardProps) => {
  const generateCharactersUrl = (id: number) => `${CHARACTERS_URL}/${id}`;

  if(props.item.entity === 'character') {
    console.log('wegweg');
  }

  return (
    <CharacterName to={generateCharactersUrl(props.item.id)}>
      <CharacterWrapper>
        <img
          width="100px"
          src={props.item.image}
          alt={props.item.name}
        />
        <span>{props.item.name}</span>
      </CharacterWrapper>
    </CharacterName>
  );
};

export default ItemCard;
