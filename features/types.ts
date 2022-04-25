export type Info = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type Location = {
  name: string;
  url: string;
};

export type Results = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
};

export type CharactersList = {
  info: Info;
  results: Results[];
};

export type CharactersListState = {
  data: CharactersList;
  pending: boolean;
  error: boolean;
};
