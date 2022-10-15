import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ item }) => {
  const location = useLocation();

  return (
    <ul>
      {item &&
        item.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  item: PropTypes.array,
  NavLink: PropTypes.element,
};
