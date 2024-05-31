"use client"
import MoviesCarousel from "@/components/MoviesCarousel";
import React, { useState }  from 'react'
import { getDiscoverMovies } from "@/lib/getMovies";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import axios from 'axios';

// async function WishList({
//   params: { id },
//   searchParams: { genre },
// }: {
//   params: { id: string };
//   searchParams: {
//     genre: string;
//   };
// }) {
//   const movies = await getDiscoverMovies(id);

export default function WishList() {
  const token = Cookies.get("token");
  let movieArrayFromDb = [];

  

  useEffect(() => {
      const checkWishList = { token: token };
      axios.post('http://localhost:4000/getWishList', checkWishList, {
          withCredentials: true
      })
      .then(response => {
          if (response.status === 200) {
            if(response.data.wishList){
              movieArrayFromDb = response.data.wishList.responseFromDb;
              console.log(movieArrayFromDb);

            }
            else{

            }
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }, [token]);

  return (
    <div className="max-w-7xl mx-auto text-white">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Your WishList:</h1>

        {/* <MoviesCarousel title={`Results:`} movies={movies} isVertical /> */}
        
      </div>
    </div>
  );
}

