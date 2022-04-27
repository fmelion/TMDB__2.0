import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import './_style.scss';

function CardGrid() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const popularMoviesData = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=a3c6f3168add0be9ecdcc3ef1a95095b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        );

        setPopularMovies(popularMoviesData.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <div className='grid'>
      {popularMovies.map((popularMovie, i) => (
        <Card element={popularMovie} />
      ))}
    </div>
  );
}

export default CardGrid;
