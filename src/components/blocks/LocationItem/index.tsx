import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Location } from "../../../types";
import { LOCATIONS_URL } from "../../../constants/routes";

interface LocationItemProps {
  location: Location;
}

const Item = styled.div`
  flex: 2
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 5px 10px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CustomLink = styled(Link)``;

const LocationItem = (props: LocationItemProps) => {
  const location = props.location;

  return (
    <CustomLink to={`${LOCATIONS_URL}/${location.id}`}>
      <ItemWrapper>
        <Item>{location.name}</Item>
        <Item>{location.type}</Item>
        <Item>{location.dimension}</Item>
      </ItemWrapper>
    </CustomLink>
  );
};

export default LocationItem;
