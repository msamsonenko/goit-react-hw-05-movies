import {
  ListItem,
  MovieImage,
  MovieCardLink,
  MovieTitle,
} from './MovieListItem.styled';

export default function MovieListItem({ movie }) {
  return (
    <ListItem>
      <MovieCardLink to={`movies/${movie.id}`}>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </MovieCardLink>
    </ListItem>
  );
}
