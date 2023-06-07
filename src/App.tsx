import { ChangeEvent, useState, useEffect } from "react";
import "./App.scss";
import { MovieList } from "./MovieList";
import Search from "./Search";
import { gql, useQuery } from "@apollo/client";
import { Movie } from "./types";

export const GET_MOVIES_QUERY = gql`
  query searchMovies($query: String!) {
    searchMovies(query: $query, page: 1) {
      page
      total_results
      total_pages
      results {
        id
        title
        release_date
        overview
        poster_path
      }
    }
  }
`;
export const GET_TOM_CRUISE_MOVIES = gql`
  query {
    person(id: 500) {
      cast {
        id
        title
        release_date
        overview
        poster_path
      }
    }
  }
`;

function App() {
  const [query, setQuery] = useState("");
  const [cruiseOnly, setCruiseOnly] = useState(true);

  const { loading, error, data } = useQuery(
    cruiseOnly ? GET_TOM_CRUISE_MOVIES : GET_MOVIES_QUERY,
    {
      variables: { query },
      skip: !query && !cruiseOnly,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first'
    }
  );

  useEffect(() => {
    setCruiseOnly(false);
  }, [query]);

  function handleQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function prepareMoviesForList() {
    if (cruiseOnly) {
      return data?.person?.cast;
    } else {
      return data?.searchMovies?.results;
    }
  }

  return (
    <>
      <header>
        <h1>Cruisey Movie: Monday</h1>
      </header>
      <Search
        query={query}
        handleQuery={handleQuery}
        setCruiseOnly={setCruiseOnly}
        loading={loading}
      />
      <MovieList movies={prepareMoviesForList()} />
    </>
  );
}

export default App;
