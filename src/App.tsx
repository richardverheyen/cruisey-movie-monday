// import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <TextField id="outlined-basic" label="Search" variant="outlined" data-testid="search" />
      <Button variant="outlined" data-testid="lucky">I'm feeling Cruisey</Button>
    </>
  )
}

export default App
