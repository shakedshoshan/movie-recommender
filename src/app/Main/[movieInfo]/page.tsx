//"use client"
import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovieByID, getMovieCast, getMovieImages, getRelatedMoviesById, getTrailerById } from "@/lib/getMovies";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import MovieTitle from "@/components/MovieTitle";
import Rating from "@/components/Rating";
import VideoPlayer from "@/components/VideoPlayer";
import WishListButton from "@/components/WishListButton";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import CarouselBanner from "@/components/CarouselBanner";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { CldVideoPlayer } from 'next-cloudinary';







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

  const images = await getMovieImages(id);

  const cast = await getMovieCast(id);


  const trailerKey = trailerId?.results[0]?.key || "" ;

   
  return (

    <div className="mt-32 xl:mt-42">
      

      <div className="">
        <MovieTitle movie = {data}/>
      </div>

      
      <div className="max-w-6xl w-screen mx-auto text-white space-y-6 flex flex-col  mt-32 xl:mt-42">
      <p className="font-bold text-3xl">Images: </p>
      <div className="flex space-x-4 overflow-scroll scrollbar-hide pt-16 pb-16 pl-24 scale-125">
        {images.backdrops.slice(4, 14).map((image) => (
          <Image className="hover:scale-150 hover:border-solid hover:border-stone-200 hover:border-2 transition"
          src={getImagePath(image.file_path, true)}
          alt="image"
          width={400}
          height={350}
          key={getImagePath(image.file_path, true)}
              />
          ))}
      </div>


      <div>
        <h1 className="font-bold text-3xl">Details:</h1>
        <p className="py-2 text-xl">Rating:   {data.vote_average} ({data.vote_count} votes)</p>
        <p className="py-2 text-xl">Release date:   {data.release_date}</p>
        <p className="py-2 text-xl">Run time:   {data.runtime} minuts</p>

        <div className="flex flex-row space-x-4">
        <p className="py-2 text-xl">Geners: </p>
        {data.genres.map((genre: {
          [x: string]: ReactNode; id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}) => (
          <p className="py-2 text-xl">{genre.name}  |  </p>
        ))}
        </div>

        <p className="py-2 text-xl">Original language: {data.original_language}</p>

        <div className="flex flex-row space-x-4">
        <p className="py-2 text-xl">Production Companies:  </p>
        {data.production_companies.map((production_companies: {
          [x: string]: ReactNode; id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}) => (
          
            <p className="py-2 text-xl">{production_companies.name}({production_companies.origin_country})  |   </p>
          
        ))}
        </div>
        <p className="py-2 text-xl">Budget:   {data.budget}$</p>
        <p className="py-2 text-xl">Revenue:   {data.revenue}$</p>


      </div>

      <p className="font-bold text-3xl pb-2">Cast: </p>
      <div className="flex space-x-6 overflow-scroll scrollbar-hide scale-110 pt-1 pl-1 pr-1">

        {cast.cast.slice(0, 10).map((p) => (
          <div className="space-y-2">
            <Image className="hover:border-solid hover:border-stone-200 hover:border-2 hover:scale-105 rounded-full "
            src={getImagePath(p.profile_path, true)}
            alt=""
            width={250}
            height={400}
              />

            <div className="flex flex-col items-center justify-center">
              <small className="font-bold pb-2 items-center justify-center">{p.character}</small>
              <small className="items-center justify-center">{p.name}</small>  
            </div>
          </div>
          ))}

      </div>


      <h1 className="font-bold text-3xl pt-12 pb-8">Trailer:</h1>

      <VideoPlayer keys= {trailerKey} w = '1200' h='700' />

     <div className="scale-125 pt-56">
      <MoviesCarousel movies={relatedMovies.results} title="You may also like"/>
      </div>
    </div>
    </div>
    
  
  );
}

export default MoviePage;