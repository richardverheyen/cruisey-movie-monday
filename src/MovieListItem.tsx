import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import { Movie } from "./types";

export function MovieListItem({movie}: {movie: Movie}) {
    return <Card sx={{height: "100%"}}>
    <CardActionArea sx={{height: "100%", flexDirection: "column"}}>
      <CardMedia
        sx={{ height: 400, backgroundPositionY: "15%" }}
        image={movie.poster_path}
        alt="movie poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {new Date(movie.release_date.toString()).getFullYear()}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="overview">
          {movie.overview}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  }