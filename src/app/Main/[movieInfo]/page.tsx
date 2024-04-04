//"use client"
import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies, getMovieByID, getRelatedMoviesById, getTrailerById } from "@/lib/getMovies";
import { title } from "process";
import { Genre, Movie } from "../../../../typings";
import { getPopularMovies, getTopRatedMovies,  } from "@/lib/getMovies";
import { X } from "lucide-react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import CarouselBanner from "@/components/CarouselBanner";
import useEmblaCarousel from "embla-carousel-react";
import MovieTitle from "@/components/MovieTitle";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import { CldVideoPlayer } from 'next-cloudinary';
import VideoPlayer from "@/components/VideoPlayer";
import WishListButton from "@/components/WishListButton";
//import { VideoPlayer } from "@/components/VideoPlayer";


async function MoviePage({
    params: {movieInfo},

 }: {
    params: { movieInfo: string };
  }){

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
  console.log(trailerId);

  const trailerKey = trailerId?.results[0]?.key || "" ;

   
  return (

    <div className="max-w-7xl w-screen mx-auto text-white space-y-10">
      <div className="flex flex-col  mt-32 xl:mt-42">

      <div className="">
        <MovieTitle movie = {data}/>
      </div>

      <div className="scale-x-150 scale-y-150 px-56 pb-10 flex flex-row items-center justify-center space-x-10"> 
      <Rating />
      <WishListButton />
      </div>

      <div>
        <h1 className="font-bold text-3xl">Details:</h1>
        <p className="py-2 text-xl">Rating: {data.vote_average} ({data.vote_count} votes)</p>
        <p className="py-2 text-xl">Release date: {data.release_date}</p>
        <p className="py-2 text-xl">Run time: {data.runtime} minuts</p>

        <div className="flex flex-row space-x-1">
        <p className="py-2 text-xl">Geners: </p>
        {data.genres.map((genre: {
          [x: string]: ReactNode; id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}) => (
          
            <p className="py-2 text-xl"> {genre.name}, </p>
          
        ))}
        </div>

        <p className="py-2 text-xl">Original language: {data.original_language}</p>

        <div className="flex flex-row space-x-1">
        <p className="py-2 text-xl">Production Companies: </p>
        {data.production_companies.map((production_companies: {
          [x: string]: ReactNode; id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}) => (
          
            <p className="py-2 text-xl"> {production_companies.name}({production_companies.origin_country}), </p>
          
        ))}
        </div>
        <p className="py-2 text-xl">Budget: {data.budget}$</p>
        <p className="py-2 text-xl">Revenue: {data.revenue}$</p>


      </div>

      <h1 className="font-bold text-3xl pt-12 pb-8">Trailer:</h1>

      <VideoPlayer keys= {trailerKey} w = '1200' h='700' />

  

      </div>
      <MoviesCarousel movies={relatedMovies.results} title="You may also like"/>
    </div>
  
  );
}

export default MoviePage;