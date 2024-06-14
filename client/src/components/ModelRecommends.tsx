"use client"
import { generateRecommendFromServer, getRatingsFromServer, getRecommendFromServer } from "@/lib/serverUtils";
import { Suspense, useEffect, useState } from "react";
import { getMovieRecommendations, getMoviesByGenre } from "@/lib/getMovies";
import { Movie, MovieID, SearchResults } from "../../typings";
import { useRouter } from 'next/navigation'
import LoadingComp from "./LoadingComp";
import Cookies from 'js-cookie';
import MoviesCarousel from "./MoviesCarousel";
import ColdStartarusel from "./ColdStartarusel";
import { cn } from "@/lib/utils";
import Rating from "./Rating";
import WishListButton from "./WishListButton";
import MovieCardRating from "./MovieCardRating";



export default function ModelRecommends(){

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Initialize error with null
    const [reccomends, setReccomends] = useState<MovieID[]>([]); 
    // const [token,setToken] = useState<string>('')


  useEffect(() => {
      const fetchRecommends = async () => {
        try{
          const token = Cookies.get('token');
          if (!token) {
            setError('Missing token in cookies');
            return; 
          }
        console.log("get Recommendations")
        const fetchedRatings = await getRecommendFromServer(token);

        const movies:MovieID[] = []
        let movie:any
        for (const element of fetchedRatings) {
            if(element.movieId != null) {
              movie = await getMovieRecommendations(element.movieId); // Call getMovieById for each movieId
              if(movie) movies.push(movie);
          }
        }
        movies.sort(() => Math.random() - 0.5)  
        setReccomends(movies);

    } catch {
      setError("error.message"); // Handle errors
    } finally {
      setIsLoading(false);
  }
}
  fetchRecommends();

},[])

    const handleClick = () => {
      setIsLoading(true)
      const fetchRatings = async () => {
        try {
          const token = Cookies.get('token');
          if (!token) {
            setError('Missing token in cookies'); // Handle missing token
            return; // Exit early if no token
          }
            console.log("In generate")
            const fetchedRatings = await generateRecommendFromServer(token);
    
            const movies:MovieID[] = []
            let movie:any
            for (const element of fetchedRatings) {
                if(element.movieId != null) {
                  movie = await getMovieRecommendations(element.movieId); // Call getMovieById for each movieId
                  if(movie) movies.push(movie);
              }
            }
            
            setReccomends(movies);
        } catch (error) {
          setError("error.message"); // Handle errors
        } finally {
          setIsLoading(false);
        }
        
      };
    
      fetchRatings();
    };


    return(
        <div className="space-y-10 py-10 ">
          <div className="flex flex-row ">
            <h1 className="text-4xl text-white font-bold px-10 pt-2">AI Recommendation</h1>
            <button onClick={handleClick} type="submit" className="ml-[50px] text-white text-xl bg-[#3a49d4] rounded-sm hover:bg-[#343d91] border-[#1d213f] space-x-2.5 p-2 ">Generate Reccomendations</button>
            </div>    
            {isLoading? <LoadingComp /> :
             <div className="z-20">
                <div className={cn(
                    "flex space-x-20 overflow-scroll scrollbar-hide px-10 items-center"
                )}>
                { reccomends.slice(0, 20).map((movie) => ( 
                    <div key={movie.id} className="rounded-2xl transition flex flex-col items-center justify-cente bg-[#5c6594] drop-shadow-lg ">
                        <a href={`/Main/${movie.id}-${movie.title}`}>
                        <div className="pb-4 pt-4 hover:scale-105 transition"><MovieCardRating key={movie.id} movie={movie} /> </div>
                        </a>
                        <div className="flex items-center space-x-12 justify-center pb-2">
                            <div className="pl-2"><Rating id={movie.id}  /></div>
                            <div className="pr-2"><WishListButton id={movie.id}/> </div>  
                        </div>
                        </div> 
                    )
                    )
                }
                </div>
              </div> 
              }
        </div>
    )
}



   
