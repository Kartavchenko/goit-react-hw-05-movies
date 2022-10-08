export const movieAPI = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '88dd01fe4db3764066bc9e293cf17684';
  const TRENDING = 'trending/all/day';
  //   const SEARCH = 'search/movie';
  //   const DETAILS = '/movie/{movie_id}';
  //   const CREDITS = 'movie/{movie_id}/credits';
  //   const REVIES = 'movie/{movie_id}/reviews';

  const movies = await fetch(`${BASE_URL}/${TRENDING}?api_key=${API_KEY}`);
  // console.log(movies);
  const res = await movies.json();
  //   console.log(movies.json());
  return res;
};
