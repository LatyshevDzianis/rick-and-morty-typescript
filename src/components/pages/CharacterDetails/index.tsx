import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { Episode } from "../../../types";
import { LOCATIONS_URL, EPISODES_URL } from "../../../constants/routes";
import { CHARACTER } from "../../../graphql/queries/characters/getItem";
import Loader from "../../blocks/Loader";
import { CharacterWrapper, CharacterImage, CharacterInfo } from "./style";
import {
  CharacterVars,
  CharacterData,
} from "../../../graphql/queries/characters/getItem";

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(
    CHARACTER,
    { variables: { id: id } }
  );

  const generateLocationsUrl = (id: number) => `${LOCATIONS_URL}/${id}`;
  const generateEpisodesUrl = (id: number) => `${EPISODES_URL}/${id}`;

  if (loading) return <Loader />;
  if (error) return <p>Error (</p>;

  return (
    <>
      {data && (
        <CharacterWrapper>
          <CharacterImage
            src={data.character.image}
            alt={data.character.name}
          />
          <CharacterInfo>
            <p>Name: {data.character.name}</p>
            <p>Status: {data.character.status}</p>
            <p>Species: {data.character.species}</p>
            <p>Gender: {data.character.gender}</p>
            <p>
              Origin:{" "}
              <Link to={generateLocationsUrl(data.character.origin.id)}>
                {data.character.origin.name}
              </Link>
            </p>
            <p>
              Last location:{" "}
              <Link to={generateLocationsUrl(data.character.location.id)}>
                {data.character.location.name}
              </Link>
            </p>
            <p>
              Episodes:{" "}
              {data.character.episode?.map(
                (episode: Episode, index: number) => (
                  <Link key={episode.id} to={generateEpisodesUrl(episode.id)}>
                    {episode.name}
                    {", "}
                  </Link>
                )
              )}
            </p>
          </CharacterInfo>
        </CharacterWrapper>
      )}
    </>
  );
};

export default CharacterDetails;
