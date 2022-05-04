
import { useSelector } from 'react-redux';
import Card from '../Card';
import './_style.scss';

function CardGrid() {

  
  const storeMovies = useSelector((state) => state.movies);

  //console.log('soy las storeMovies', storeMovies);

  return (
    <div className='container'>
      <h1 className='container__title--2'>it's been shown</h1>
      <h1 className='container__title'>Most Popular</h1>
      <div className='container__grid'>
        {storeMovies.map((movie, i) => (
          <Card element={movie} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
