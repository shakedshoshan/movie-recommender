//"use client"
import React, { useState }  from 'react'
import Image from 'next/image'
import { Button } from "./ui/button";
import { Movie } from '../../typings';
import { Movies } from '../../typings';
/*
// add To WishList was use add product in WishList
const addToWishList = (data : Movie) => {
  // Load wishlist from localStorage
  const storedWishList = localStorage.getItem("wishList");
  const initialWishList = storedWishList ? JSON.parse(storedWishList) : [];


  // Check if the data is already in the wishlist
  if (!initialWishList.find((Movie: { id: number; }) => Movie.id === data.id)) {
      const updatedWishList = [...initialWishList, data];


      // Update localStorage with the updated wishlist
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
  }

  {initialWishList.map((data: Movie) => (
    console.log({data})
  ))}
}

export default addToWishList;


*/
function WishListButton() {

   
  return (
    <div>
        <Button  className="bg-[#2c315b] border-[#1d213f] space-x-2">
                  <Image
                              alt="Add"
                              src="https://cdn.iconfinder.com/stored_data/1490463/128/png?token=1706195605-6j73USRLt7KPoeuDi4D%2BydmcvdDyH8m%2BszhJbcDiCkw%3D" 
                              width={20}
                              height={20}
                          />
                  <p>Add to WishList</p>
        </Button>

        
        </div>
  )
}

export default WishListButton
