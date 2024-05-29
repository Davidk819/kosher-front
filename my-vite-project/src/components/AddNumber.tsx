import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function AddNumber() {
  const [number, setNumber] = useState<number>(0);
  const [status, setStatus] = useState('');

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNumber(parseInt(event.target.value, 10) || 0);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus(event.target.value);
  };

  const handleSet = () => {
    axios.post('/api/addNumber', { number, status })
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='box'>
        <TextField
          name="number"
          type="number"
          id="filled-basic"
          label="Number"
          variant="filled"
          value={number}
          onChange={handleNumberChange}
        />
        <TextField
          name="status"
          type="text"
          id="filled-status"
          label="Status"
          variant="filled"
          value={status}
          onChange={handleStatusChange}
        />
        <Button onClick={handleSet} variant="contained" color="primary">
          Set
        </Button>
      </div>
    </ThemeProvider>
  );
}
