export type Movie = {
    [x: string]: any;
    adult: boolean;
    backdrop_path: string;
    budget: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    revenue: string;
    runtime: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  export type Movies = {
    wishList: Movie[];
  };
  
  export type SearchResults = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };

export type Genre = {
    id: number;
    name: string;
  };
  
  export type Genres = {
    genres: Genre[];
  };

  export type inputFieldT = {
    type:string,
    placeholder: string,
    label: string,
    name: string;
    register:any;
    error: undefined | object;
  };

  export type Video = {
    [x: string]: any;
    key: string;
  };
  
  export type personProps = {
    name: string,
    id: number,
    character: string;
    profile_path: string
};
  export type Person = {
    [x: string]: any;
    page: number;
    results: personProps[];
  };

  export type movieImage = {
    [x: string]: any;
    file_path: string;
  };

  export type movieImages = {
    [x: string]: any;
    backdrops: movieImage[];
  };


  export type MovieCast = {
    [x: string]: any;
    id: number;
    cast: personProps[];
  };

