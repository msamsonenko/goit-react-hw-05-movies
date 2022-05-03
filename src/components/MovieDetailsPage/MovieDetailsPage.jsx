import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/auth/movieAuth';
import MovieCard from 'components/MovieCard';
import { Wrapper, InfoTitle, ListItem, Link } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  let params = useParams();
  useEffect(() => {
    getMovieById(params.movieId).then(res => {
      setMovie(res);
    });
  }, [params.movieId]);

  return (
    <>
      <MovieCard movie={movie} />
      <Wrapper>
        <InfoTitle>Additional Information</InfoTitle>
        <ul>
          <ListItem>
            <Link to={`cast`}>Cast</Link>
          </ListItem>
          <ListItem>
            <Link to={`reviews`}>Reviews</Link>
          </ListItem>
        </ul>
      </Wrapper>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}
