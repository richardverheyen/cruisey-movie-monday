import { useState } from "react";
import "./App.scss";
import { MovieList } from "./MovieList";
import Header from "./Header";
import Search from "./Search";
import { gql, useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";

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
  const [cruiseOnly, setCruiseOnly] = useState(false);

  const { loading, error, data } = useQuery(
    cruiseOnly ? GET_TOM_CRUISE_MOVIES : GET_MOVIES_QUERY,
    {
      variables: { query },
      skip: !query && !cruiseOnly,
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first'
    }
  );

  function prepareMoviesForList() {
    if (cruiseOnly) {
      return data?.person?.cast;
    } else {
      return data?.searchMovies?.results;
    }
  }

  if (error) {
    toast.error(`${error.name}: ${error.message}`)
  }

  return (
    <>
      <Header />
      <Search
        query={query}
        setQuery={setQuery}
        setCruiseOnly={setCruiseOnly}
        loading={loading}
      />
      <MovieList movies={prepareMoviesForList()} />
    </>
  );
}

export default App;
