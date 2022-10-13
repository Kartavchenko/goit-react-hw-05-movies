import { useState, useEffect } from 'react';
import { movieSearch } from '../../service/movieAPI';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await movieSearch(query);
    setMovie(data);
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  const handleChange = e =>
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
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
                <NavLink to={`/movies/${id}`} state={{ search: location }}>
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
