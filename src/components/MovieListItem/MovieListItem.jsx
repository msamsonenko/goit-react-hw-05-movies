import {
  ListItem,
  MovieImage,
  MovieCardLink,
  MovieTitle,
} from './MovieListItem.styled';
const NO_POSTER =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

export default function MovieListItem({ movie, link }) {
  return (
    <ListItem>
      <MovieCardLink to={`${link}`}>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieImage
          src={
            movie.poster_path === null
              ? `${NO_POSTER}`
              : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          }
          alt={movie.title}
        />
      </MovieCardLink>
    </ListItem>
  );
}
