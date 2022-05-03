//strict mode return
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <h1>Movie Finder</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navigation />
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
