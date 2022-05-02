import { Link } from 'react-router-dom';
import { ListItem, MovieImage } from './MovieListItem.styled';
import { getMovieById } from 'components/auth/movieAuth';

export default function MovieListItem({ movie }) {
  const click = e => {};
  return (
    <ListItem>
      <Link to={`movies/${movie.id}`} onClick={click}>
        <p>{movie.title}</p>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </ListItem>
  );
}
