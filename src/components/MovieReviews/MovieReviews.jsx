import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/auth/movieAuth';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  let params = useParams();
  useEffect(() => {
    getMovieReviews(params.movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [params.movieId]);
  console.log(reviews);
  return (
    <ul>
      {reviews.map(
        ({ author, author_details, content, created_at, id, url }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src="https://www.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg"
                  alt={author}
                />
              </div>
              <div>
                <span>{created_at}</span>
                <p>{content}</p>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}
