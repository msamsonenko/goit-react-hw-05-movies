import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from 'components/auth/movieAuth';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import { Movielist } from './HomePage.styled';
// import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  // let navigate = useNavigate();

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }
    getPopularMovies().then(({ results }) => {
      setMovies(state => [...state, ...results]);
    });
  });

  console.log(movies);
  return (
    <Movielist>
      {movies.map(movie => {
        return <MovieListItem movie={movie} key={movie.id} />;
      })}
    </Movielist>
  );
}
