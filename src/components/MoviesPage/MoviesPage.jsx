import { useState } from 'react';
import { searchMoviesByInput } from 'components/auth/movieAuth';
import Notiflix from 'notiflix';
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
    if (userInput === '') {
      return Notiflix.Notify.failure('Please enter movie name');
    }
    searchMoviesByInput(userInput).then(({ results, total_results }) => {
      if (results.length === 0) {
        return Notiflix.Notify.failure('Please enter a valid movie name');
      }
      Notiflix.Notify.success(`A total of ${total_results} movies found`);
      setMovies(results);
      console.log(movies);
    });
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
            placeholder="Search movies"
          />
          <SerachFormBtn type="submit">
            <ImSearch />
          </SerachFormBtn>
        </SearchForm>
      </SearchBarContainer>

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
