import { useState, useEffect } from 'react';
import { getPopularMovies } from 'components/auth/movieAuth';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import { Movielist } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }
    getPopularMovies().then(({ results }) => {
      setMovies(state => [...state, ...results]);
    });
  });

  return (
    <Movielist>
      {movies.map(movie => {
        return <MovieListItem movie={movie} key={movie.id} />;
      })}
    </Movielist>
  );
}
