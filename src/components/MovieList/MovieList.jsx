import MovieListItem from 'components/MovieListItem';
import { Movielist } from './MovieList.styled';
import { useState, useEffect } from 'react';
import { getPopularMovies } from 'components/auth/movieAuth';

export default function MovieList() {
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
    <>
      <Movielist>
        {movies.map(movie => {
          return (
            <MovieListItem
              movie={movie}
              key={movie.id}
              link={`movies/${movie.id}`}
            />
          );
        })}
      </Movielist>
    </>
  );
}
