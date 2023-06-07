import { Movie } from "./types";
import { MovieListItem } from "./MovieListItem";

export function MovieList({ movies }: { movies: [Movie] }) {
  return (
    <section id="movie-list">
      <div className="gutters">
        <ul>
          {movies?.map((movie: Movie, id: Number) => (
            // Using the id in combination here with the movie.id is not ideal.
            // First we should fix our api if that's our responsibility, but if it wasn't our api, we would need a way of preventing this.
            // For this project, I'm making a point of removing errors, so I will go against the idea and use the temporary id here. - RV
            <li key={movie.id?.toString() + id.toString()}>
              <MovieListItem movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
