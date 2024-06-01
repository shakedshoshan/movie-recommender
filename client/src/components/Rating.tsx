"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function BasicRating(id: any) {
  const token = Cookies.get("token");
  let usersRating = null;

  const [value, setValue] = React.useState<number | null>(null);
  
  useEffect(() => {
    const rating = { token: token, movieId: id };
  axios.post('http://localhost:4000/getRatings', rating, {
    withCredentials: true 
  })
    .then(response => {
      if (response.status === 200) {
        setValue(response.data.rating.responseFromDb)
        usersRating = response.data.rating.responseFromDb;
      } else {
        console.log("fail to set rating")
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  
  const handleRatingClick = async (newValue: number | null) => {
    console.log("BASICRATING");
    console.log("newValue");
    setValue(newValue);
    const rating = { token: token, movieId: id, rating: newValue };
      axios.post('http://localhost:4000/setRatings', rating, {
        withCredentials: true 
      })
        .then(response => {
          if (response.status === 200) {
            console.log("set ratings")
          } else {
            console.log("fail to set rating")
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => handleRatingClick(newValue)}
        className='stroke-white bottom-1'
        emptyIcon=""
      />
    </Box>
  );
}