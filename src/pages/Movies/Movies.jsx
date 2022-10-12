import { useState } from 'react';
import { movieSearch } from '../../service/movieAPI';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState([]);
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('query');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await movieSearch(search);
    setMovie(data);
  };

  const handleChange = e => setSearch(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
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
                <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
