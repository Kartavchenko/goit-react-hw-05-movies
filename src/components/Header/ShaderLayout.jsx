import { Link, Head, Container } from './Header.styled';
import { Outlet } from 'react-router-dom';

const OutLine = () => {
  return (
    <>
      <Head>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Head>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default OutLine;
