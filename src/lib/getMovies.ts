"use server"
import { Value } from "@radix-ui/react-select";
import { Movie, SearchResults, Movies, Video, Person, personProps, movieImages, movieImage, MovieCast, Origins, Origin, Genres } from "../../typings";
import Cookies from 'js-cookie';


async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

  
  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);
  

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data.results;
}


export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);

  return data.results;
}


export async function getMovieByID(id: number){
const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

url.searchParams.set("language", "en-US");

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  next: {
    revalidate: 60 * 60 * 24,
  },
};

const response = await fetch(url.toString(), options);
const data = (await response.json()) as Movie;

return data;

}


export async function getRelatedMoviesById(id: number){
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}/recommendations`);
  
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");
  
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  
  return data;
  
  }


  export async function getTrailerById(id: number){
    const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`);
    
    url.searchParams.set("language", "en-US");
    
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    };
    
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as Video;
    
    return data;
    
    }

    export async function getPersonIdByName(personName?: string){
      const url = new URL(`https://api.themoviedb.org/3/search/person?query=${personName}&include_adult=false&language=en-US&page=1`);
      
      //url.searchParams.set("language", "en-US");
      
      const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      };
      
      const response = await fetch(url.toString(), options);
      const data = (await response.json()) as Person;
      return data.results[0]?.id;
      }


      export async function getMovieImages(movieId: number){
        const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}/images`);
        
        const options: RequestInit = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        };
        
        const response = await fetch(url.toString(), options);
        const data = (await response.json()) as movieImages;
        return data
        }

        export async function getMovieCast(movieId: number){
          const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`);
          
          
          const options: RequestInit = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            },
          };
          
          const response = await fetch(url.toString(), options);
          const data = (await response.json()) as MovieCast;
          return data
          }


          export async function getMoviesByActor(ActorId?: number){
            const url = new URL(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_cast=${ActorId}`);
            const url1 = new URL(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_cast=525`);
            
            const options: RequestInit = {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
              },
            };
            
            const response = await fetch(url.toString(), options);
            const data = (await response.json()) as SearchResults;
            if(data.results[0] == null){
              const response1 = await fetch(url1.toString(), options);
              const data1 = (await response1.json()) as SearchResults;
              return data1.results;
            }
            return data.results;
            }


            export async function getActorIDByName(ActorName: String){
              // const parts: string[] = ActorName.split(' ', 2);

              // // If you need both parts and the second part could contain more spaces
              // const firstPart: string = parts[0];
              // const secondPart: string = ActorName.slice(ActorName.indexOf(' ') + 1);
              const url = new URL(`https://api.themoviedb.org/3/search/person?query=${ActorName}&include_adult=false&language=en-US&page=1`);
              
              
              const options: RequestInit = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                },
              };
              
              const response = await fetch(url.toString(), options);
              const data = (await response.json()) as Person;
              if(data.results[0] == null) return 525
              return data.results[0].id;
              }


              export async function getMoviesByGenre(MovieId: any){
                const url = new URL(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=${MovieId}`);
                
                
                const options: RequestInit = {
                  method: "GET",
                  headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                  },
                };
                
                const response = await fetch(url.toString(), options);
                const data = (await response.json()) as SearchResults;
                return data.results;
                }

                export async function getOrigins(){
                  const url = new URL(`https://api.themoviedb.org/3/configuration/countries?language=en-US`);
                  
                  
                  const options: RequestInit = {
                    method: "GET",
                    headers: {
                      accept: "application/json",
                      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                    },
                  };
                  
                  const response = await fetch(url.toString(), options);
                  const data = (await response.json()) as Origin;
                  //console.log(data[5].english_name)
                  return data;
                  }
  
                  export async function getGenreIdByName(genreName: string) {
                    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
                    const options: RequestInit = {
                      method: "GET",
                      headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                      },
                      next: {
                        revalidate: 60 * 60 * 24, // 24 hours
                      },
                    };

                    const response = await fetch(url.toString(), options);
                    const data = (await response.json()) as Genres;
                    
                  
                    const genres = data.genres;
                    for (let i = 0; i < genres.length; i++) {
                      //const genre = genres[i];
                      if(genres[i].name === genreName) {
                        return genres[i].id;
                      }
                    }
                    return null;
                  }

                  export async function getexample() {
                    const result = await getActorIDByName("Jeremy Piven");
                    console.log(result)
                    return result
                  }
                  




             
              


