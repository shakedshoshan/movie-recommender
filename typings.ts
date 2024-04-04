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