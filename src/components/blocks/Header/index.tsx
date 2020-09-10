import React from "react";

import {
  CHARACTERS_URL,
  LOCATIONS_URL,
  EPISODES_URL,
} from "../../../constants/routes";
import { HeaderBox, HeaderContainer, Nav, NavItem } from "./style";

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainer>
        <p>Rick And Morty</p>
        <Nav>
          <NavItem to={CHARACTERS_URL}>Characters</NavItem>
          <NavItem to={LOCATIONS_URL}>Locations</NavItem>
          <NavItem to={EPISODES_URL}>Episodes</NavItem>
        </Nav>
      </HeaderContainer>
    </HeaderBox>
  );
};

export default Header;
