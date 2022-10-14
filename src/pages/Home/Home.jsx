import { movieTrending } from '../../service/movieAPI';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const location = useLocation();

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
      <ul>
        {item.map(({ original_title, name, id }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {original_title ? original_title : name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
