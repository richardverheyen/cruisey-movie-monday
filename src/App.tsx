// import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tmdb-one-blue.vercel.app/',
  cache: new InMemoryCache(),
});

function App() {

  function handleClick() {
    client
      .query({
        query: gql`
          query {
            searchPerson(query: "Tom", page: 1) {
              page
              total_results
              total_pages
              results {
                name
              }
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }
  return (
    <>
      <TextField id="outlined-basic" label="Search" variant="outlined" data-testid="search" />
      <Button onClick={handleClick} variant="outlined" data-testid="lucky">I'm feeling Cruisey</Button>
    </>
  )
}

export default App
