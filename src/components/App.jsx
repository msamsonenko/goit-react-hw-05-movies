//strict mode return
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import MovieCast from './MovieCast';
import MovieReviews from './MovieReviews';

export const App = () => {
  return (
    <div>
      <h1>Movie Finder</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />} />
        </Route>

        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCast />} />
        </Route>
      </Routes>
    </div>
  );
};
