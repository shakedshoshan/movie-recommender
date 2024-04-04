//"use client"
import getImagePath from "@/lib/getImagePath";

import Image from "next/image";
import { Movie } from "../../typings";
import Link from "next/link";
import Rating from "./Rating";
import React,{ useState } from "react";
import { getTrailerById } from "@/lib/getMovies";
import VideoPlayer from "./VideoPlayer";


async function MovieCard({ movie }: { movie: Movie }) {

  const year = movie.release_date.match(/^\d{4}/);



  return (
    
    <a href={`/Main/${movie.id}-${movie.title}`} className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
    <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10" />
    <div className="flex flex-row">
      <p className="absolute z-20 bottom-5 left-5 text-white text-xl font-semibold">{movie.title}   {year}</p>
    </div>
    
     <Image
      className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
      src={getImagePath(movie.backdrop_path || movie.poster_path)}
      alt={movie.title}
      width={1920}
      height={1080}
      key={movie.id}
    />
    
      
    


  </div>
  </a>
  );
}

export default MovieCard;