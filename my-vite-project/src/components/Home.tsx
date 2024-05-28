import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  const [filledValue, setFilledValue] = useState('');
  const [number, setNumber] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  
  const handleNumberChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNumber(event.target.value);
  };
  const handleStatusChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField name='number' type='number' id="filled-basic" label="Number" variant="filled" value={number} onChange={handleNumberChange}/>
      <TextField name='status' id="filled-basic" label="Status" variant="filled" value={status} onChange={handleStatusChange} />
    </Box>
  );
}
