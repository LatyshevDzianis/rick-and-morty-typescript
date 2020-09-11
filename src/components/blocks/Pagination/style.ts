import styled from "styled-components";

interface StyledProps {
  active: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageItem = styled.span`
  text-decoration: none;
  color: black;
  float: left;
  padding: 8px 16px;
  background: ${({ active }: StyledProps) => (active ? "#ff0000" : "inherit")};
  color: ${({ active }: StyledProps) => (active ? "#fff" : "inherit")};

  &:hover {
    background: #ff0000;
    color: #fff;
    cursor: pointer;
  }
`;

export { Wrapper, PageItem };
