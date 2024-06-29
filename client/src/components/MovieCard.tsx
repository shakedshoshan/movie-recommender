//"use client"
import getImagePath from "@/lib/getImagePath";

import Image from "next/image";
import { Movie } from "../../typings";
import React, { useState } from "react";



type Props = { movie: Movie }
async function MovieCard({ movie }: Props) {

  const year = movie.release_date?.match(/^\d{4}/) ? movie.release_date.match(/^\d{4}/) : null;


  return (

    <a href={`/Main/${movie.id}-${movie.title}`} className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-110 hover:order-first transition duration-200 ease-out hover:drop-shadow-lg ">

        <p className="absolute z-10 bottom-5 left-5 text-white text-xl font-semibold">{movie.title}   {year}</p>


        <Image
          className="w-fit lg:min-w-[400px] h-fit object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          src={getImagePath(movie.backdrop_path)}
          alt={movie.title}
          width={1920}
          height={1180}
          key={movie.id}
        />

      </div>

    </a>
  );
}

export default MovieCard;