export const generateLocationsUrl = (id: number) => `${LOCATIONS_URL}/${id}`;
export const generateEpisodesUrl = (id: number) => `${EPISODES_URL}/${id}`;
export const generateCharactersUrl = (id: number) => `${CHARACTERS_URL}/${id}`;

export const MAIN_ROUTE = "/";

export const CHARACTERS_URL = "/characters";
export const CHARACTER_DETAILS_URL = `${CHARACTERS_URL}/:id`;

export const LOCATIONS_URL = "/locations";
export const LOCATION_DETAILS_URL = `${LOCATIONS_URL}/:id`;

export const EPISODES_URL = "/episodes";
export const EPISODE_DETAILS_URL = `${EPISODES_URL}/:id`;
