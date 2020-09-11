export interface Character {
  id: number;
  name: string;
  status?: string;
  gender: string;
  species: string;
  type?: string;
  origin: Location;
  location: Location;
  episode?: Episode[];
  image: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters?: Character[];
  created?: string;
  image?: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents?: Character[];
  created?: string;
  image?: string;
}
