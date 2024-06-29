import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import inputField from './InputField';

export default function BasicTextFields({ label = "Your user name" }) {
  return (
    <Box
      component="form"
      className='text-white'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >


      <TextField id="outlined-basic" label={label} variant="outlined" />
    </Box>
  );
}