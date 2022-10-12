import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { movieDetails } from '../../service/movieAPI';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Container,
  List,
  Item,
  BtnGoBack,
  Poster,
  Podcasts,
  BoxPodcasts,
} from './MovieDetail.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieDetails(movieId);
        setMovie([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  const goBack = () => navigate(-1);
  const image = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      {movie &&
        movie.map(
          ({
            id,
            original_title,
            vote_average,
            overview,
            genres,
            poster_path,
          }) => {
            return (
              <Container key={id}>
                <div>
                  <BtnGoBack type="button" onClick={goBack}>
                    <AiOutlineArrowLeft />
                    Go Back
                  </BtnGoBack>
                  <Poster src={`${image}${poster_path}`} alt="" />
                </div>
                <div>
                  <List>
                    <Item>
                      <h2>{original_title}</h2>
                    </Item>
                    <Item>
                      User Score: {Math.ceil((vote_average * 100) / 10)}%
                    </Item>
                    <Item>
                      <h3>Overview</h3>
                    </Item>
                    <Item>{overview}</Item>
                    <Item>
                      <h4>Genres</h4>
                    </Item>
                    <Item>{genres.map(item => item.name).join(', ')}</Item>
                  </List>
                </div>
              </Container>
            );
          }
        )}
      {movie && (
        <BoxPodcasts>
          <li>
            <Podcasts to={`cast`}>Cast</Podcasts>
          </li>
          <li>
            <Podcasts to={`reviews`}>Reviews</Podcasts>
          </li>
          <Outlet />
        </BoxPodcasts>
      )}
    </div>
  );
};
