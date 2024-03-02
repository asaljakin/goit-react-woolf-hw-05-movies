import axios from 'axios';
import { API_KEY, TOKEN_KEY } from 'const';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = TOKEN_KEY;
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingMoviesToday = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMoviesByTitle = async query => {
  const { data } = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCreditsById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviewsById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
