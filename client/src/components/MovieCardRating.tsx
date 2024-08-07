//"use client"
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import React, { JSXElementConstructor, useState } from "react";


type Props = { movie: any }

async function MovieCardRaring({ movie }: Props) {

  const year = movie.release_date.match(/^\d{4}/);

  return (


    <div className="relative cursor-pointer ">

      <p className="absolute z-20 bottom-1 right-0 text-white text-xl pl-2 pr-2 p-1 font-semibold scale-75 bg-slate-700 rounded-sm opacity-85">{movie.vote_average}/10   ({movie.vote_count})</p>


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