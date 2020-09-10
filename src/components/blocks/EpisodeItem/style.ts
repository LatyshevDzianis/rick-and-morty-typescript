import styled from "styled-components";

export const Item = styled.div`
  flex: 2;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  flex-wrap: wrap;
  padding: 5px 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
