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
  background: ${(props: StyledProps) => (props.active ? "#ff0000" : "inherit")};
  color: ${(props: StyledProps) => (props.active ? "#fff" : "inherit")};

  &:hover {
    background: #ff0000;
    color: #fff;
    cursor: pointer;
  }
`;

export { Wrapper, PageItem };
