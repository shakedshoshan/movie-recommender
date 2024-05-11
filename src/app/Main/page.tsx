
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCardRating from "@/components/MovieCardRating";
import MoviesCarousel from "@/components/MoviesCarousel";
import Rating from "@/components/Rating";
import { getColdStartMovies } from "@/lib/getColdStartMovies";
import { getMoviesByActor, getMoviesByGenre, getNameByActorID, getPersonIdByName, getPopularMovies, getTopRatedMovies } from "@/lib/getMovies";
import { cn } from "@/lib/utils";
import { ClassNames } from "@emotion/react";
import { title } from "process";
import WishListButton from "@/components/WishListButton";
import Link from "next/link";
import AddedToWishList from "@/components/AddedToWishList";
import { useState } from "react";


async function Main() {
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const coldStartMovies = await getColdStartMovies(0, "Action","Drama");
  const FavoriteActorMovies = await getMoviesByActor(525);
  const ActorName = await getNameByActorID(525);
  const FavoriteGenreMovie = await getMoviesByGenre(12);
  //const GenreName = await name_to_genreID(12);
  const wl = true;
 

  

  return (
    <html>
    <div className="flex flex-col space-y-2">
      <CarouselBannerWrapper />
    <div className="flex flex-col space-y-6 xl:-mt-48">

      {/* our recommend algorithm*/}
      <p className="text-4xl text-white font-bold px-10 pt-2">Reccomends For You</p>
      
    <div className={cn(
          "flex space-x-20 overflow-scroll scrollbar-hide px-10 items-center"
        )}>
        { coldStartMovies.map((movie) => ( 
            
                
            <div className="rounded-2xl hover:scale-125 transition flex flex-col items-center justify-cente bg-[#5c6594] drop-shadow-lg ">
              <a href={`/Main/${movie.id}-${movie.title}`}>
              <div className="pb-4 pt-2  transition"><MovieCardRating key={movie.id} movie={movie}  /> </div>
              </a>
              <div className="flex items-center space-x-12 justify-center pb-2">
                    <div className="pl-2"><Rating  /></div>
                    <div className="pr-2"><WishListButton wl={wl}/> </div>
                    
              </div>
              </div>
              
          )
          )
        }
        </div>
        


      <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      <MoviesCarousel movies={popularMovies} title="Popular" />
      <MoviesCarousel movies={FavoriteActorMovies} title="Favorite Actor - " name = {ActorName} />
      <MoviesCarousel movies={FavoriteGenreMovie} title="Favorite Genre - " name = "Adventure" />
      
      
    
    </div>
    </div>
    </html>
  );
}

export default Main;





function name_to_genreID(arg0: number) {
  throw new Error("Function not implemented.");
}
