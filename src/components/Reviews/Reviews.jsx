import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/auth/movieAuth';
import Notiflix from 'notiflix';
import {
  ListItem,
  Author,
  DateTime,
  ReviewItem,
  ReviewList,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  let params = useParams();
  useEffect(() => {
    getMovieReviews(params.movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [params.movieId]);
  if (reviews.length === 0) {
    return Notiflix.Notify.failure('No reviews found for this movie');
  }
  return (
    <ul>
      {reviews.map(({ author, content, created_at, id }) => {
        let date = created_at.substr(0, 10);
        let time = created_at.substr(11, 5);
        return (
          <ListItem key={id}>
            <ReviewList>
              <ReviewItem>
                <Author>{author}</Author>
              </ReviewItem>
              <ReviewItem>
                Date: <DateTime>{date}</DateTime>
              </ReviewItem>
              <ReviewItem>
                Time: <DateTime>{time}</DateTime>
              </ReviewItem>
            </ReviewList>
            <div>
              <p>{content}</p>
            </div>
          </ListItem>
        );
      })}
    </ul>
  );
}
