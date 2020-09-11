import React, { FunctionComponent } from "react";

import { Wrapper } from "./style";

const CardGrid: FunctionComponent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardGrid;
