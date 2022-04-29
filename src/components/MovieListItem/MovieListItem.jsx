export default function MovieListItem({ movie }) {
  return (
    <li>
      <p>{movie.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        alt={movie.title}
      />
    </li>
  );
}
