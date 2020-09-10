import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2em;
`;

const CharacterCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const CharactersTitle = styled.div`
  text-align: center;
`;

export { Wrapper, CharacterCardsWrapper, CharactersTitle };
