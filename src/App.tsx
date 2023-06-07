import { ChangeEvent, useState } from 'react'
import './App.scss'
import { MovieList } from "./MovieList";
import Search from "./Search"
import { gql, useQuery } from "@apollo/client";

export const GET_MOVIES_QUERY = gql`
    query searchMovies($query: String!) {
        searchMovies(query: $query, page: 1) {
            page
            total_results
            total_pages
            results {
                id
                title
            }
        }
    }
`;

function App() {
  const [query, setQuery] = useState("");

  const { loading, error, data } = useQuery(GET_MOVIES_QUERY, {
    variables: { query }
  });

  function handleQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  console.log({data});

  return (
    <>
      <header>
        <h1>Cruisey Movie: Monday</h1>
      </header>
      <Search query={query} handleQuery={handleQuery} loading={loading} />

      <MovieList movies={data?.searchMovies.results} />
    </>
  )
}

export default App
