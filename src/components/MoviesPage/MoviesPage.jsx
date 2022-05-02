import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { searchMoviesByInput } from 'components/auth/movieAuth';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import { Movielist } from './MoviesPage.styled';

export default function MoviesPage() {
  const [userInput, setUserInput] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = e => {
    setUserInput(e.currentTarget.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    searchMoviesByInput(userInput).then(({ results }) => {
      setMovies(state => [...state, ...results]);
    });
    reset();
  };
  const reset = () => {
    return setUserInput('');
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={handleInputChange}
          value={userInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Find movie</button>
      </form>
      <Outlet />
      <Movielist>
        {movies.map(movie => {
          return <MovieListItem movie={movie} key={movie.id} />;
        })}
      </Movielist>
    </>
  );
}
