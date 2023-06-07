import { Movie } from "./types";
import { MovieListItem } from "./MovieListItem";

export function MovieList({ movies }: { movies: [Movie] }) {
  return (
    <section id="movie-list">
      <div className="gutters">
        <ul>
          {movies?.map((movie: Movie) => (
            <li key={movie.id.toString()}>
              <MovieListItem movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
