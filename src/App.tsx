import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MovieList } from "./MovieList";


function App() {

  const [query, setQuery] = useState("");

  function handleChange(e: any) {
    setQuery(e.target.value)
  }

  return (
    <>
      <TextField onChange={handleChange} id="outlined-basic" label="Search Movies" variant="outlined" data-testid="search" />
      <Button variant="outlined" data-testid="lucky">Just Show Tom Cruise Movies</Button>
      <MovieList query={query} />
    </>
  )
}

export default App
