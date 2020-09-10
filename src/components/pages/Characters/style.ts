import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const PagWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export { Wrapper, PagWrapper };
