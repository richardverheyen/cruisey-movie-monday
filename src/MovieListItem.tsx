import { Dispatch, SetStateAction } from 'react';
import { Movie } from "./types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
  movie: Movie;
  setShownMovieId: Dispatch<SetStateAction<Number|undefined>>;
};

export function MovieListItem({movie, setShownMovieId}: Props) {
    return <Card sx={{height: "100%"}}>
    <CardActionArea 
      onClick={() => {
        console.log(movie.id);
        setShownMovieId(movie.id)}
      }
      sx={{height: "100%", display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>
      <CardMedia
        component="div"
        sx={{ height: 400, width: "100%", backgroundPositionY: "15%" }}
        image={movie.poster_path ? movie.poster_path.toString() : ''}
        title="movie poster"
      />
      <CardContent sx={{width: "100%", padding: "20px", boxSizing: "border-box"}}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title || movie.name || ""}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {new Date(movie.release_date?.toString()).getFullYear() || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="overview">
          {movie.overview || ""}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  }