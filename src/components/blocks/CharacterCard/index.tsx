import React from "react";

import { Character } from "../../../types";
import { CHARACTERS_URL } from "../../../constants/routes";
import { CharacterName, CharacterWrapper } from "./style";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <CharacterName to={`${CHARACTERS_URL}/${props.character.id}`}>
      <CharacterWrapper>
        <img
          width="100px"
          src={props.character.image}
          alt={props.character.name}
        />
        <span>{props.character.name}</span>
      </CharacterWrapper>
    </CharacterName>
  );
};

export default CharacterCard;
