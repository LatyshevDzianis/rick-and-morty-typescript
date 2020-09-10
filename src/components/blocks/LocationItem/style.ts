import styled from "styled-components";

const Item = styled.div`
  flex: 2;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 5px 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { Item, ItemWrapper };
