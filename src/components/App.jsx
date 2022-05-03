//strict mode return
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <h1>Movie Finder</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </div>
  );
};
