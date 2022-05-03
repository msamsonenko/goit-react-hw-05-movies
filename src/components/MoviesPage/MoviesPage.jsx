import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { searchMoviesByInput } from 'components/auth/movieAuth';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import {
  Movielist,
  SearchBarContainer,
  SearchForm,
  SerachFormBtn,
  SearchFormInput,
} from './MoviesPage.styled';
import { ImSearch } from 'react-icons/im';

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
    console.log(movies);
    reset();
  };
  const reset = () => {
    return setUserInput('');
  };

  return (
    <>
      <SearchBarContainer>
        <SearchForm onSubmit={onFormSubmit}>
          <SearchFormInput
            onChange={handleInputChange}
            value={userInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SerachFormBtn type="submit">
            <ImSearch />
          </SerachFormBtn>
        </SearchForm>
      </SearchBarContainer>
      <Outlet />
      <Movielist>
        {movies.map(movie => {
          return (
            <MovieListItem movie={movie} key={movie.id} link={`${movie.id}`} />
          );
        })}
      </Movielist>
    </>
  );
}
