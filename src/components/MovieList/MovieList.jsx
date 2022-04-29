import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function Movielist({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return <MovieListItem movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}
