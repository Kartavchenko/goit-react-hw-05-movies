import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { movieSearch } from '../../service/movieAPI';
import PropTypes from 'prop-types';
import MovieList from 'components/MoviesList/MoviesList';

const Movies = () => {
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
      <MovieList item={movie} />
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  movie: PropTypes.array,
  movieName: PropTypes.string,
  searchParams: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  MovieList: PropTypes.element,
};
