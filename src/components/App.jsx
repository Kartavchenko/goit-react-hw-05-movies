import { Route, Routes } from 'react-router-dom';
import { Link, Header, Container } from './App.styled';
import { Home } from '../pages/Home/Home';
import { Cast } from '../pages/Cast/Cast';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Movies } from '../pages/Movies/Movies';
import { Reviews } from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={'nothing to find'} />
        </Routes>
      </Container>
    </>
  );
};
