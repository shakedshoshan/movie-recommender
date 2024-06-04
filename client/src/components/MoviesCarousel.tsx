
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

type Props = { title?: string; movies: Movie[]| any[]| MovieID[]; isVertical?: boolean; name?: string };

function MoviesCarousel({ title, movies, isVertical, name }: Props) {
  const wl = true;
  return (
    <div className="z-20">
      <h2 className="text-xl text-white font-bold px-10 py-2">{title} {name}</h2>

      <div
        className={cn(
          "flex space-x-6 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5  items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard key={movie.popularity} movie={movie} />
                <div className="max-w-2xl pl-8">
                  <p className="font-bold"> {movie.title} ({movie.release_date?.split("-")[0]})</p> 
                  <hr className="mb-3" />
                  <p className="py-2">{movie.overview}</p>
                  <h3 className="font-bold">Rating: {movie.vote_average} ({movie.vote_count})</h3>
                  <div className="flex flex-row items-center space-x-96">
                  <Rating key={movie.original_title} id={movie.id} />
                  <WishListButton key={movie.imdb_id} id={movie.id}/>
                </div>
                </div>
              </div>
            ))
          : movies.slice(0, 15).map((movie) => ( 
            
              <div key={movie.popularity} className="bg-[#1e2242] space-x-6 rounded-2xl transition duration-200 ease-out">
                <MovieCard key={movie.revenue} movie={movie} /> 
                <div className="flex items-center space-x-20 pt-4">
                      <Rating key={movie.original_title} id={movie.id} />
                      <WishListButton key={movie.imdb_id} id={movie.id}/>
                    </div>
                </div>
           
            )
             
            )
            

            }
      </div>
    </div>
  );
}

export default MoviesCarousel;