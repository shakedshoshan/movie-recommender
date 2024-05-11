"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>();

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
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='stroke-white bottom-1'
        emptyIcon=""
      />
      
    </Box>

  );
}