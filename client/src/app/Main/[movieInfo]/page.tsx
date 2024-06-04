//"use client"
import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovieByID, getMovieCast, getMovieImages, getRelatedMoviesById, getTrailerById } from "@/lib/getMovies";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";
import MovieTitle from "@/components/MovieTitle";
import Rating from "@/components/Rating";
import VideoPlayer from "@/components/VideoPlayer";
import MoviePageClient from "@/components/MoviePageClient";



async function MoviePage({params: {movieInfo},}: {params: { movieInfo: string };}) {

  let movieID = movieInfo.match(/\d+/);
  let id: number;

  if(movieID){
    id = parseInt(movieID[0]);
  } else {
    id = 278;
  }


  const data = await getMovieByID(id); 

  const relatedMovies = await getRelatedMoviesById(id);

  const trailerId = await getTrailerById(id);

  const images = await getMovieImages(id);

  const cast = await getMovieCast(id);

  let trailerKey = trailerId?.results[0]?.key || "" ;


  for(let i = 0; i<trailerId?.results?.length;i++){
    if (trailerId?.results[i]?.name === "Trailer" || trailerId?.results[i]?.name == "trailer"){
      trailerKey = trailerId?.results[i]?.key
      break;
    } else if(trailerId?.results[i]?.name.includes("trailer"))
    {
      trailerKey = trailerId?.results[i]?.key
    }
  }
  

   
  return (

    <div>
      <MoviePageClient data={data} relatedMovies={relatedMovies} cast={cast} trailerKey={trailerKey} images={images}/>
    </div>);
}

export default MoviePage;