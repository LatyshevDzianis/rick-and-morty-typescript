import React from "react";

import { Character } from "../../../types";
import { CHARACTERS_URL } from "../../../constants/routes";
import { CharacterName, CharacterWrapper } from "./style";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = (props: CharacterCardProps) => {
  const generateCharactersUrl = (id: number) => `${CHARACTERS_URL}/${id}`;

  return (
    <CharacterName to={generateCharactersUrl(props.character.id)}>
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
