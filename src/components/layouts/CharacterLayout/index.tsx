import React, { FunctionComponent } from "react";

import { CharacterWrapper } from "./style";

const CharacterLayout: FunctionComponent = ({ children }) => {
  return <CharacterWrapper>{children}</CharacterWrapper>;
};

export default CharacterLayout;
