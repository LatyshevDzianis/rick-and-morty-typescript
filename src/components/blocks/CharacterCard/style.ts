import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharacterWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  gap: 1em;
  transition: background 0.3s;

  &:hover {
    background: #d1d1d1;
  }
`;

export const CharacterName = styled(Link)`
  text-decoration: none;
`;
