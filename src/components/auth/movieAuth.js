const API_KEY = '4372ebc6ffafe48c40762bc303bcc44d';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function getPopularMovies() {
  return fetch(
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => res.json());
}

export function getMovieById(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    res => res.json()
  );
}

export function getMovieCast(id) {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
}

export function getMovieReviews(id) {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => res.json());
}

export function searchMoviesByInput(userInput) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${userInput}`
  ).then(res => res.json());
}
