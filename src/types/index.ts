export type MayBe<T> = T | null | undefined;

export type Movie = {
  Title?: string;
  Year?: MayBe<string>;
  Rated?: MayBe<string>;
  Released?: MayBe<string>;
  Runtime?: MayBe<string>;
  Genre?: MayBe<string>;
  Director?: MayBe<string>;
  Writer?: MayBe<string>;
  Actors?: MayBe<string>;
  Plot?: MayBe<string>;
  Language?: MayBe<string>;
  Country?: MayBe<string>;
  Awards?: MayBe<string>;
  Poster?: string;
  Metascore?: MayBe<string>;
  imdbRating?: MayBe<string>;
  imdbID?: MayBe<string>;
  imdbVotes?: MayBe<string>;
  Type?: MayBe<string>;
  Response?: MayBe<string>;
  totalSeasons?: MayBe<string>;
  Images?: string[];
  ComingSoon?: boolean;
};
