import { Value } from "@radix-ui/react-select";
import { Movie, SearchResults, MovieID, Video, Person, personProps, movieImages, movieImage, MovieCast, Origins, Origin, Genres } from "../../typings";
import Cookies from 'js-cookie';
import axios from "axios";


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


            export async function getActorIDByName(ActorName?: String){
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

                  export async function getMovieRecommendations(id: number): Promise<MovieID | undefined | null> {
                      const url = `https://api.themoviedb.org/3/movie/${id}`;
                      const apiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjVlOTc2Yjc4YTVlYTExYWViOGY1NGI2Y2E4YWJlZiIsInN1YiI6IjY1YWY5MGQyNjdiNjEzMDEwYzYwYjViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RSwHSy3pLGc4btjjRa2m0v86JLDWcQd8DOIauCZ-lIs'; // Replace with your actual API key
                    
                      try {
                        const response = await axios.get(url, {
                          headers: {
                            Authorization: apiKey,
                            'Content-Type': 'application/json', // Recommended header for JSON requests
                          },
                        });
                    
                        const data:MovieID = response.data;
                        const m:MovieID = {backdrop_path:data.backdrop_path, id:data.id, title:data.title, release_date:data.release_date, poster_path:data.poster_path, vote_average:data.vote_average, vote_count:data.vote_count}
                        return m;
                      } catch (error) {
                        console.error(error);
                        return null; // Or throw an error if appropriate
                      }
                  }
                  




             
              


