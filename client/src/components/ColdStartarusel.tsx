import { Movie, MovieID } from "../../typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import Rating from "./Rating";
import Image from "next/image";
import { Button } from "./ui/button";
import WishListButton from "./WishListButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Suspense } from "react";
import LoadingComp from "./LoadingComp";
import { getUserPreferences } from "@/lib/serverUtils";
import { getActorIDByName, getGenreIdByName, getMoviesByActor, getMoviesByGenre } from "@/lib/getMovies";
import { getColdStartMovies } from "@/lib/getColdStartMovies";
import MovieCardRating from "./MovieCardRating";

type Props = { token:string };

async function ColdStartarusel({token}: Props) {


  const userPreferences = await getUserPreferences(token);


  const coldStartMovies = await getColdStartMovies(true, userPreferences.LatestYear, userPreferences.Genre1,userPreferences.Genre2,userPreferences.Genre3,userPreferences.Actor1.value,userPreferences.Actor2.value,userPreferences.Studio, userPreferences.Origin);

  return (
    <div className="z-20">
        <div className={cn(
            "flex space-x-20 overflow-scroll scrollbar-hide px-10 items-center"
        )}>
        { coldStartMovies.slice(0, 10).map((movie) => ( 
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
  );
}

export default ColdStartarusel;