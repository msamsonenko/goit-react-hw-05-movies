import { useState, useEffect } from 'react';
import movieAuth from 'components/auth/movieAuth';
import Movielist from 'components/MovieList';
export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }
    console.log('hello');
    movieAuth().then(({ results }) => {
      setMovies(state => [...state, ...results]);
    });
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Movie Finder</h1>
      <Movielist movies={movies} />
    </div>
  );
}
