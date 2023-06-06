import { gql, useQuery } from "@apollo/client";
import { Movie } from "./types";
import { MovieListItem } from "./MovieListItem";

export const GET_MOVIES_QUERY = gql`
    query searchMovies($query: String!) {
        searchMovies(query: $query, page: 1) {
            page
            total_results
            total_pages
            results {
                name
            }
        }
    }
`;

export function MovieList({query}: {query: String}) {
    const { loading, error, data } = useQuery(GET_MOVIES_QUERY, {
      variables: { query }
    });
    // console.log(query)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
      <ul>
        {
          data.searchMovies.results.map((movie : Movie) => (
            <MovieListItem movie={movie} />
          ))
        }
      </ul>
    );
  }