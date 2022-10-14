import { Route, Routes } from 'react-router-dom';
import { Link, Header, Container } from './App.styled';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

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
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={'nothing to find'} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
