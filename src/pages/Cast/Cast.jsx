import { movieCast } from 'service/movieAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieCast(movieId);
      setActors([...data.slice(0, 10)]);
    };
    fetchMovies();
  }, [movieId]);

  const image = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {actors &&
        actors.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              <img
                style={{ width: '100px' }}
                src={`${image}${profile_path}`}
                alt=""
              />
              <p>Actor: {name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
