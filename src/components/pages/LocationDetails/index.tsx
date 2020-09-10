import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Character } from "../../../types";
import ItemCard from "../../blocks/ItemCard";
import { LOCATION } from "../../../graphql/queries/locations/getItem";
import Loader from "../../blocks/Loader";
import { Wrapper, CharacterCardsWrapper, ResidentsTitle } from "./style";
import {
  LocationData,
  LocationVars,
} from "../../../graphql/queries/locations/getItem";

const LocationDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<LocationData, LocationVars>(
    LOCATION,
    {
      variables: { id },
    }
  );

  if (loading) return <Loader />;
  if (error) return <p>Error (</p>;

  return (
    <>
      {data && (
        <Wrapper>
          <p>Name: {data.location.name}</p>
          <p>Type: {data.location.type}</p>
          <p>Dimension: {data.location.dimension}</p>
          <ResidentsTitle>
            <p>Residents of location</p>
            <CharacterCardsWrapper>
              {data.location.residents?.map((character: Character) => (
                <ItemCard key={character.id} item={character} />
              ))}
            </CharacterCardsWrapper>
          </ResidentsTitle>
        </Wrapper>
      )}
    </>
  );
};

export default LocationDetails;
