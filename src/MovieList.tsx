import { Dispatch, SetStateAction } from 'react';
import { Movie } from "./types";
import { MovieListItem } from "./MovieListItem";

type Props = {
  movies: [Movie];
  setShownMovieId: Dispatch<SetStateAction<Number|undefined>>;
};

export function MovieList({ movies, setShownMovieId }: Props) {
  return (
    <section id="movie-list">
      <div className="gutters">
        <ul>
          {movies?.map((movie: Movie, id: Number) => (
            // Using the id in combination here with the movie.id is not ideal.
            // First we should fix our api if that's our responsibility, but if it wasn't our api, we would need a way of preventing this.
            // For this project, I'm making a point of removing errors, so I will go against the idea and use the temporary id here. - RV
            <li key={movie.id?.toString() + id.toString()}>
              <MovieListItem movie={movie} setShownMovieId={setShownMovieId} />
            </li>
          ))}
        </ul>
        {/* pagination would go here */}
      </div>
    </section>
  );
}
