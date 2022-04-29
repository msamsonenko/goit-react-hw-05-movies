const API_KEY = '4372ebc6ffafe48c40762bc303bcc44d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzcyZWJjNmZmYWZlNDhjNDA3NjJiYzMwM2JjYzQ0ZCIsInN1YiI6IjYxZjJlNGU4MDI4ZjE0MDA0NDY4MTRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cqz3O6NOcCgYVVD_iWGRr2jUWDgo-_WiYVvpfSbhW_0';

export default function movieAuth() {
  return fetch(
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => res.json());
}
