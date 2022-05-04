const tmdbApiFetch = ({ type, genreId, searchString }) => {
  const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

  if (type === 'popularMovies') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  }
  if (type === 'genre') {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
  }
  if (type === 'search') {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=1&include_adult=false`;
  }
};

export default tmdbApiFetch;
