//"use client"
import { Movie } from "../../../typings";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCardRating from "@/components/MovieCardRating";
import MoviesCarousel from "@/components/MoviesCarousel";
import Rating from "@/components/Rating";
import { getColdStartMovies } from "@/lib/getColdStartMovies";
import { getActorIDByName, getGenreIdByName, getMovieRecommendations, getMoviesByActor, getMoviesByGenre, getPersonIdByName, getPopularMovies, getTopRatedMovies } from "@/lib/getMovies";
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
import { getRatingsFromServer, getUserPreferences } from "@/lib/serverUtils";
import dynamic from "next/dynamic";
import Template from "../Templaite";
import Templat from "../Templaite";
import { Value } from "@radix-ui/react-select";
import ModelRecommends from "@/components/ModelRecommends";
import LoadingComp from "@/components/LoadingComp";
import ColdStartarusel from "@/components/ColdStartarusel";


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

  // const numOfRating = await getRatingsFromServer(tokenValue);
  // console.log(numOfRating)

  const userPreferences = await getUserPreferences(tokenValue);
  //console.log(userPreferences)

  let ActorID
  let ActorName
  if(userPreferences.Actor1 != null){
    ActorID = await getActorIDByName(userPreferences.Actor1.value);
    ActorName = userPreferences.Actor1.value;
  } else {
    ActorID===525
  }
  
  
  if(ActorID===525){
    ActorID = await getActorIDByName(userPreferences.Actor2.value);
    ActorName = userPreferences.Actor2.value;
    if(ActorID===525){
      ActorName = "Christopher Nolan";
    }
  }
  
  const FavoriteActorMovies = await getMoviesByActor(ActorID);
  if(FavoriteActorMovies[0].id === 1149947) ActorName = "Christopher Nolan";
  
  const GenreID = await getGenreIdByName(userPreferences.Genre1);
  const FavoriteGenreMovie = await getMoviesByGenre(GenreID);

  // const coldStartMovies = await getColdStartMovies(true, userPreferences.LatestYear, userPreferences.Genre1,userPreferences.Genre2,userPreferences.Genre3,userPreferences.Actor1.value,userPreferences.Actor2.value,userPreferences.Studio, userPreferences.Origin);

  // const m = await getMovieRecommendations(278);
  // console.log(m)

  return (
    
    <div className="flex flex-col space-y-2 forced-colors:active">
      
      <CarouselBannerWrapper />
      
    <div className="flex flex-col space-y-6 xl:-mt-48">

      {/* our recommend algorithm*/}
      <p className="text-4xl text-white font-bold px-10 pt-2">Reccomends For You</p>
      <Suspense fallback={<LoadingComp />}>
      <ColdStartarusel token={tokenValue}/>
      </Suspense>
    
    
      <Suspense fallback={<LoadingComp />}>
      <ModelRecommends />
      </Suspense>
      
        
      <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      
      <MoviesCarousel movies={popularMovies} title="Popular" />
      
      <MoviesCarousel movies={FavoriteActorMovies} title="Favorite Actor - " name = {ActorName} />
      <MoviesCarousel movies={FavoriteGenreMovie} title="Favorite Genre - " name = {userPreferences.Genre1} />
      
    
    </div>
    
    </div>
    
  );
}

export default Main;





function name_to_genreID(arg0: number) {
  throw new Error("Function not implemented.");
}


