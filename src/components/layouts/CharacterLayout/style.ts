import styled from "styled-components";

export const CharacterWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
