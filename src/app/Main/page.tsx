//"use client"
import { Movie } from "../../../typings";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCardRating from "@/components/MovieCardRating";
import MoviesCarousel from "@/components/MoviesCarousel";
import Rating from "@/components/Rating";
import { getColdStartMovies } from "@/lib/getColdStartMovies";
import { getActorIDByName, getGenreIdByName, getMoviesByActor, getMoviesByGenre, getPersonIdByName, getPopularMovies, getTopRatedMovies } from "@/lib/getMovies";
import { cn } from "@/lib/utils";
import { ClassNames } from "@emotion/react";
import { title } from "process";
import WishListButton from "@/components/WishListButton";
import Link from "next/link";
import AddedToWishList from "@/components/AddedToWishList";
import { Suspense, useEffect, useState } from "react";
import error from "next/error";
import Cookies from 'js-cookie';
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from 'next/headers'
import { getUserPreferences } from "@/lib/serverUtils";
import dynamic from "next/dynamic";
import Template from "../Templaite";
import Templat from "../Templaite";


async function Main() {

  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  
  
  const wl = true;

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let tokenValue = '';
  if(token){
    tokenValue = token.value;
  }

  const userPreferences = await getUserPreferences(tokenValue);
  console.log(userPreferences)


  let ActorID = await getActorIDByName(userPreferences.Actor1);
  let ActorName = userPreferences.Actor1;
  
  if(ActorID===525){
    ActorID = await getActorIDByName(userPreferences.Actor2);
    ActorName = userPreferences.Actor2;
    if(ActorID===525){
      ActorName = "Christopher Nolan";
    }
  }
  
  const FavoriteActorMovies = await getMoviesByActor(ActorID);
  if(FavoriteActorMovies[0].id === 1149947) ActorName = "Christopher Nolan";
  
  const GenreID = await getGenreIdByName(userPreferences.Genre1);
  const FavoriteGenreMovie = await getMoviesByGenre(GenreID);

  const coldStartMovies = await getColdStartMovies(userPreferences.LatestYear, userPreferences.Genre1,userPreferences.Genre2,userPreferences.Genre3,userPreferences.Actor1,userPreferences.Actor2,userPreferences.Studio, userPreferences.Origin);

  return (
    
    <div className="flex flex-col space-y-2 forced-colors:active">
      <Suspense fallback={<div>Loading...</div>}>
      <CarouselBannerWrapper />
    <div className="flex flex-col space-y-6 xl:-mt-48">

      {/* our recommend algorithm*/}
      <p className="text-4xl text-white font-bold px-10 pt-2">Reccomends For You</p>
      
    <div className={cn(
          "flex space-x-20 overflow-scroll scrollbar-hide px-10 items-center"
        )}>
        { coldStartMovies.slice(0, 30).map((movie) => ( 
            
                
            <div className="rounded-2xl transition flex flex-col items-center justify-cente bg-[#5c6594] drop-shadow-lg ">
              <a href={`/Main/${movie.id}-${movie.title}`}>
              <div className="pb-4 pt-4 hover:scale-105 transition"><MovieCardRating key={movie.id} movie={movie}  /> </div>
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
        

        
      <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      
      <MoviesCarousel movies={popularMovies} title="Popular" />
      
      <MoviesCarousel movies={FavoriteActorMovies} title="Favorite Actor - " name = {ActorName} />
      <MoviesCarousel movies={FavoriteGenreMovie} title="Favorite Genre - " name = {userPreferences.Genre1} />
      
    
    </div>
    </Suspense>
    </div>
    
  );
}

export default Main;





function name_to_genreID(arg0: number) {
  throw new Error("Function not implemented.");
}

