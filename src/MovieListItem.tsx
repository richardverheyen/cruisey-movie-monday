// import { useQuery } from "@apollo/client";
import { Movie } from "./types";


export function MovieListItem({movie}: {movie: Movie}) {
    return <p>{movie.name}</p>
  }