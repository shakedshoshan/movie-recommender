"use client"
import { getRatingsFromServer, processMovieElements } from "@/lib/serverUtils";
import { Suspense, useEffect, useState } from "react";
import { getMovieRecommendations, getMoviesByGenre } from "@/lib/getMovies";
import { Movie, MovieID, SearchResults } from "../../typings";
import { useRouter } from 'next/navigation'
import LoadingComp from "./LoadingComp";
import Cookies from 'js-cookie';
import MoviesCarousel from "./MoviesCarousel";



export default function ModelRecommends(){

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Initialize error with null
    const [ratings, setRatings] = useState<MovieID[]>([]); 

  useEffect(() => {
    const fetchRatings = async () => {
        
      try {
        const token = Cookies.get('token');
        if (!token) {
          setError('Missing token in cookies'); // Handle missing token
          return; // Exit early if no token
        }

        const fetchedRatings = await getRatingsFromServer(token);

        const movies:MovieID[] = []
        let movie:any
        for (const element of fetchedRatings) {
            if(element.movieId != undefined) {
              movie = await getMovieRecommendations(element.movieId); // Call getMovieById for each movieId
              movies.push(movie)
          }
        }
        
        setRatings(movies);

      } catch (error) {
        setError("error.message"); // Handle errors
      } finally {
        setIsLoading(false);
      }
      
    };

    fetchRatings();
    //setIsLoading(false);
    
}, [isLoading]);



    const handleClick = () => {
        setIsLoading(true)
        };


    return(
        <div>
          <div className="flex flex-row">
            <h1 className="text-xl text-white font-bold px-10 py-1">Model Recommends</h1>
            <button onClick={handleClick} type="submit" className="ml-[50px] text-white text-1xl bg-[#3a49d4] rounded-sm hover:bg-[#343d91] border-[#1d213f] space-x-2.5 p-2">New reccomends</button>
            </div>
            {isLoading? <LoadingComp /> :  <MoviesCarousel movies={ratings}/> }
        </div>
    )
}

{/* <div className="text-white text-2xl"> hiiiiiiiiiii</div> */}
{/* <MoviesCarousel movies={ratings}/> */}



   
