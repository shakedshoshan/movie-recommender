//"use client"
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getActorIDByName, getGenreIdByName, getMoviesByActor, getMoviesByGenre, getPopularMovies, getTopRatedMovies } from "@/lib/getMovies";
import { Suspense } from "react";

import { cookies } from 'next/headers'
import { getUserPreferences } from "@/lib/serverUtils";
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


  const userPreferences = await getUserPreferences(tokenValue);

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

  return (
    
    <div className="flex flex-col space-y-2 forced-colors:active">
      
      <CarouselBannerWrapper />
      
    <div className="flex flex-col space-y-6 xl:-mt-48">

      {/* our recommend algorithm*/}
      <Suspense fallback={<LoadingComp />}>
      <ModelRecommends />
      </Suspense>

      <p className="text-4xl text-white font-bold px-10 pt-2">Reccomended For You</p>
      <Suspense fallback={<LoadingComp />}>
      <ColdStartarusel token={tokenValue}/>
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


