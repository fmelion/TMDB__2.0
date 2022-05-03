import * as React from 'react';
import Navbar from '../Navbar';
import Content from '../Content';
import './_style.scss';
import axios from 'axios';

export default function App() {

  const [popularMovies, setPopularMovies] = React.useState([]);

  React.useEffect(() => {
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
    <div className='container'>
      <Navbar/>
      <Content movies={popularMovies}/>
    </div>
  );
}
