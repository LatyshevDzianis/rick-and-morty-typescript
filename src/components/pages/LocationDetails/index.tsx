import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

import { Location, Character } from "../../../types";
import CharacterCard from "../../blocks/CharacterCard";
import { LOCATION } from "../../../graphql/queries";
import Loader from "../../blocks/Loader";
import { Wrapper, CharacterCardsWrapper, ResidentsTitle } from "./style";

interface LocationVars {
  id: number;
}

interface LocationData {
  location: Location;
}

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
                <CharacterCard key={character.id} character={character} />
              ))}
            </CharacterCardsWrapper>
          </ResidentsTitle>
        </Wrapper>
      )}
    </>
  );
};

export default LocationDetails;
