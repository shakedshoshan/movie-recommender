import { Movie } from "../../typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import Rating from "./Rating";
import Image from "next/image";
import { Button } from "./ui/button";
import WishListButton from "./WishListButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

type Props = { title?: string; movies: Movie[]; isVertical?: boolean };

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl text-white font-bold px-10 py-2">{title}</h2>

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
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold"> {movie.title} ({movie.release_date?.split("-")[0]})</p> 
                  <hr className="mb-3" />
                  <p className="py-2">{movie.overview}</p>
                  <h3 className="font-bold">Rating: {movie.vote_average}</h3>
                  <div className="flex flex-row items-center space-x-96">
                  <Rating />
                  <WishListButton />
                </div>
                </div>
              </div>
            ))
          : movies.map((movie) => ( 
            
              <div className="bg-[#1e2242] space-x-6 rounded-2xl hover:scale-110 transition duration-200 ease-out">
                <MovieCard key={movie.id} movie={movie} /> 
                <div className="flex items-center space-x-20">
                      <Rating />
                      <WishListButton  />
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