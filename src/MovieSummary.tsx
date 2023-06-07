import { Dispatch, SetStateAction } from 'react';
import { gql, useQuery } from "@apollo/client";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const GET_MOVIE = gql`
  query searchMovies($id: ID!) {
    movie(id: $id) {
      id
      title
      name
      runtime
      homepage
      popularity
      release_date
      overview
      poster_path
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
  console.log({data});

  const { movie } = data;

  return (
    <Dialog
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
        <DialogContentText>
          {movie.overview}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShownMovieId(undefined)}>Disagree</Button>
        <Button onClick={() => setShownMovieId(undefined)} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
