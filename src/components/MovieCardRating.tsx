//"use client"
import getImagePath from "@/lib/getImagePath";

import Image from "next/image";
import { Movie } from "../../typings";
import Link from "next/link";
import Rating from "./Rating";
import React,{ useState } from "react";
import { getTrailerById } from "@/lib/getMovies";
import VideoPlayer from "./VideoPlayer";
import { Button } from "./ui/button";
import WishListButton from "./WishListButton";



async function MovieCardRaring({ movie }: { movie: Movie }) {

  const year = movie.release_date.match(/^\d{4}/);

  return (
    
    
    <div className="relative cursor-pointer ">
    {/*<div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10" >*/}
    
      <p className="absolute z-20 bottom-1 right-0 text-white text-xl font-semibold scale-75 bg-slate-700 rounded-sm opacity-85">{movie.vote_average}/10   ({movie.vote_count})</p>
    
    
     <Image
      className=" lg:min-w-[50px]  object-cover object-center shadow-md shadow-gray-900 drop-shadow-2xl rounded-sm w-72 h-full"
      src={getImagePath(movie.poster_path)}
      alt={movie.title}
      width={300}
      height={700}
      key={movie.id}
    /> 
      
    </div>
    
  
  );
}

export default MovieCardRaring;