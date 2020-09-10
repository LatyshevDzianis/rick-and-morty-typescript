import styled from "styled-components";

const CharacterWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterImage = styled.img`
  width: 300px;
  height: 300px;
`;

const CharacterInfo = styled.div`
  font-size: 1em;
`;

export { CharacterWrapper, CharacterImage, CharacterInfo };
