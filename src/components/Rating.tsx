"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function BasicRating(id: any) {
  const [value, setValue] = React.useState<number | null>(null);
  const handleRatingClick = async (newValue: number | null) => {
    console.log("BASICRATING");
    console.log("newValue");
    setValue(newValue);
    let token = Cookies.get("token");

    
    const rating = { token: token, movieId: id, rating: newValue };
      axios.post('http://localhost:4000/setRatings', rating, {
        withCredentials: true 
      })
        .then(response => {
          console.log("login");
          console.log(response);
          // router.push('/signUp/preferences');
          if (response.status === 200) {
            console.log(response.data)
            const token = response.data.token;
            const expires = new Date(Date.now() + 3600000); // 1 hour from now
            document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;
            console.log(response.data.token);
            document.cookie = `token=${token}; expires = in 1h for ${Date.now}`;
            console.log("resposnse token")
            console.log(token)
            // Cookies.set('token', token, { expires: 1, secure: true });
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