import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderBox = styled.div`
  width: 100%;
  background: #130f40;
  color: #95afc0;
  font-size: 1.3em;
`;

const HeaderContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Nav = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

const NavItem = styled(NavLink)`
  margin-right: 1em;
  color: #95afc0;
  text-decoration: none;
  transition: hover linear 0.3s;

  &.active {
    color: red;
  }
  &:hover {
    color: red;
  }
`;

export { HeaderBox, HeaderContainer, Nav, NavItem };
