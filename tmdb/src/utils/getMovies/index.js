import axios from 'axios';
import tmdbApiFetch from '../tmdbApiFetch';

const getMovies = ({ type, genreId, searchString }) => {
  const link = tmdbApiFetch({ type, genreId, searchString });

  const fetchMovies = async () => {
    return await axios.get(`${link}`);
  };

  return fetchMovies()
};

export default getMovies;
