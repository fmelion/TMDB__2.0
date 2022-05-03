import Card from '../Card';
import './_style.scss';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

function CardGrid({movies}) {

  // const [popularMovies, setPopularMovies] = useState([]);

  // useEffect(() => {
  //   const getPopularMovies = async () => {
  //     try {
  //       const popularMoviesData = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=a3c6f3168add0be9ecdcc3ef1a95095b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  //       );

  //       setPopularMovies(popularMoviesData.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getPopularMovies();
  // }, []);

  //console.log(popularMovies);

  return (
    <div className='container'>
      <h1 className='container__title--2'>it's been shown</h1>
      <h1 className='container__title'>Most Porpular</h1>
      <div className='container__grid'>
        {movies.map((movie, i) => (
          <Card element={movie} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
