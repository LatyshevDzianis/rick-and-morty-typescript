import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import styled from "styled-components";

import { Location, Character } from "../../../types";
import CharacterCard from "../../blocks/CharacterCard";
import { LOCATION } from "../../../queries";
import Loader from "../../blocks/Loader";

interface LocationVars {
  id: number;
}

interface LocationData {
  location: Location;
}

const Wrapper = styled.div`
  margin-top: 2em;
`;

const ResidentsTitle = styled.div`
  text-align: center;
`;

const CharacterCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const LocationDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<LocationData, LocationVars>(
    LOCATION,
    {
      variables: { id: id },
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
