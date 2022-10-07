// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { movieAPI } from '../service/movieAPI';
import { Home } from '../pages/Home';
import { Cast } from '../pages/Cast';
import { MovieDetails } from '../pages/MovieDetails';
import { Movies } from '../pages/Movies';
import { Reviews } from '../pages/Reviews';

export const App = () => {
  // const [films, setFilms] = useState([]);
  console.log(movieAPI());

  // useEffect(() => {
  //   const fetchFilms = async() => {
  //     const data = await
  //   }
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
