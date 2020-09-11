import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { Episode } from "../../../types";
import {
  generateLocationsUrl,
  generateEpisodesUrl,
} from "../../../constants/routes";
import Loader from "../../blocks/Loader";
import { CharacterImage, CharacterInfo } from "./style";
import {
  CHARACTER,
  CharacterVars,
  CharacterData,
} from "../../../graphql/queries/characters/getItem";
import CharacterLayout from "../../layouts/CharacterLayout";

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(
    CHARACTER,
    { variables: { id: id } }
  );

  if (loading) return <Loader />;
  if (error) return <p>Error: ${error.message}</p>;

  return (
    <>
      {data && (
        <CharacterLayout>
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
              {data.character.episode?.map((episode: Episode) => (
                <Link key={episode.id} to={generateEpisodesUrl(episode.id)}>
                  {episode.name}
                  {", "}
                </Link>
              ))}
            </p>
          </CharacterInfo>
        </CharacterLayout>
      )}
    </>
  );
};

export default CharacterDetails;
