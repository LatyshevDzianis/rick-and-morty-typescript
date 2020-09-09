import React from "react";
import styled from "styled-components";

import { Character } from "../../../types";
import { Link } from "react-router-dom";
import { CHARACTERS_URL } from "../../../constants/routes";

const CharacterWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  gap: 1em;
  transition: background .3s;

  &:hover {
    background: #d1d1d1;
  }
`;

const CharacterName = styled(Link)`
  text-decoration: none;
`;

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <CharacterName to={`${CHARACTERS_URL}/${props.character.id}`}>
      <CharacterWrapper>
        <img width="100px" src={props.character.image} alt={props.character.name}/>
        <span>{props.character.name}</span>
      </CharacterWrapper>
    </CharacterName>
  );
};

export default CharacterCard;
