import React from "react";
import { Link } from "react-router-dom";

import { Location } from "../../../types";
import { LOCATIONS_URL } from "../../../constants/routes";
import { ItemWrapper, Item } from "./style";

interface LocationItemProps {
  location: Location;
}

const LocationItem = (props: LocationItemProps) => {
  const location = props.location;

  const generageLocationsUrl = (id: number) => `${LOCATIONS_URL}/${id}`;

  return (
    <Link to={generageLocationsUrl(location.id)}>
      <ItemWrapper>
        <Item>{location.name}</Item>
        <Item>{location.type}</Item>
        <Item>{location.dimension}</Item>
      </ItemWrapper>
    </Link>
  );
};

export default LocationItem;
