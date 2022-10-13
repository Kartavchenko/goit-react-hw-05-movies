import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieReviews } from 'service/movieAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieReviews(movieId);
      setReviews(data);
    };
    fetchMovies();
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
