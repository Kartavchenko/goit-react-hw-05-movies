import { useState } from 'react';
import { movieSearch } from '../../service/movieAPI';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovie = async () => {
      const data = await movieSearch(query);
      setMovie(data);
    };
    fetchMovie();
  }, [query]);

  const handleChange = e => {
    setMovieName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieName}
          name="search"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {movie &&
          movie.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
