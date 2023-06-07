import { Dispatch, SetStateAction } from 'react';
import { gql, useQuery } from "@apollo/client";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { toast } from "react-hot-toast";

export const GET_MOVIE = gql`
  query searchMovies($id: ID!) {
    movie(id: $id) {
      id
      title
      name
      runtime
      homepage
      release_date
      overview
      poster_path
      vote_average
      popularity
    }
  }
`;

type Props = {
  shownMovieId: Number | undefined;
  setShownMovieId: Dispatch<SetStateAction<Number|undefined>>;
};

export default function MovieSummary({shownMovieId, setShownMovieId} : Props) {
  const { loading, error, data } = useQuery(
    GET_MOVIE,
    {
      variables: { id: shownMovieId },
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first'
    }
  );

  if (loading) return null;
  // console.log({data});

  if (error) {
    toast.error(`${error.name}: ${error.message}`)
  }

  const { movie } = data;

  return (
    <Dialog
      id="movie-summary"
      maxWidth="lg"
      open={true}
      onClose={() => setShownMovieId(undefined)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle>
        {movie.title || movie.name || ""}
      </DialogTitle>
      <DialogContent>
        <figure>
          <img src={movie.poster_path} alt="Movie poster" />
        </figure>
        <DialogContentText>
          <b>Release Year:</b> {new Date(movie.release_date?.toString()).getFullYear() || ""}
        </DialogContentText>
        <DialogContentText>
          <b>Length:</b> {movie.runtime} minutes
        </DialogContentText>
        <DialogContentText>
          <b>Summary:</b> {movie.overview}
        </DialogContentText>
        <DialogContentText>
          <b>Popularity:</b> {movie.popularity.toFixed(2)} / 100
        </DialogContentText>
        <DialogContentText>
          <b>Vote Average:</b> {movie.vote_average.toFixed(2)} / 10
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button><a target="_blank" href={movie.homepage}>Website</a></Button>
        <Button onClick={() => setShownMovieId(undefined)} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
