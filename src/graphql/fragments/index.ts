import gql from "graphql-tag";

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    image
    status
    species
    location {
      id
      name
    }
  }
`;

export const EPISODE_FRAGMENT = gql`
  fragment EpisodeFragment on Episode {
    id
    name
    air_date
    episode
  }
`;

export const LOCATION_FRAGMENT = gql`
  fragment LocationFragment on Location {
    id
    name
    type
    dimension
  }
`;

export const INFO_FRAGMENT = gql`
  fragment InfoFragment on Info {
    pages
    next
    prev
  }
`;
