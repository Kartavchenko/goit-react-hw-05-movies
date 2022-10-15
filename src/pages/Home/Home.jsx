import { movieTrending } from '../../service/movieAPI';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieTrending();
        setItem([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <MovieList item={item} />
    </main>
  );
};

export default Home;

Home.propTypes = {
  item: PropTypes.array,
  MovieList: PropTypes.element,
};
