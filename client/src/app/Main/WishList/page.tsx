//"use client"
import MoviesCarousel from "@/components/MoviesCarousel";
import React from 'react'
import { getMovieByID } from "@/lib/getMovies";
import { cookies } from 'next/headers'
import { getWishlistFromServer } from "@/lib/serverUtils";




export default async function WishList() {
  // const token = Cookies.get("token");
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let tokenValue = '';
  if (token) {
    tokenValue = token.value;
  }

  let movieArrayFromDb: any = [];


  movieArrayFromDb = await getWishlistFromServer(tokenValue)
  const fetchedMovies: any = [];

  for (let i = 0; i < movieArrayFromDb.length; i++) {
    const movieData = await getMovieByID(movieArrayFromDb[i].movieId);
    fetchedMovies.push(movieData);
  }

  return (
    <div className="max-w-7xl mx-auto text-white">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Your WishList:</h1>

        <MoviesCarousel title={`Results:`} movies={fetchedMovies} isVertical />

      </div>
    </div>
  );
}

