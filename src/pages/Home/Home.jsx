import { movieTrending } from '../../service/movieAPI';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Home = () => {
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
              <NavLink to={`/movies/${id}`}>
                {original_title ? original_title : name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
