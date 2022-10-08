import { movieAPI } from '../service/movieAPI';
// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Home = async () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieAPI();
        setItem(prev => [...prev, ...data]);
      } catch (error) {}
    };

    fetchMovies();
  }, []);

  return <div>{item}</div>;
};
