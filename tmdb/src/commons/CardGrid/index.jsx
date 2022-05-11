import { useSelector } from 'react-redux';
import Card from '../Card';
import './_style.scss';

function CardGrid() {
  const storeMovies = useSelector(state => state.movies);

  return (
    <div className="cardGridContainer">
      <h3 className="cardGridContainer__title">soy yo</h3>
      <div className='cardGridContainer__grid'>
        {storeMovies.map((movie, i) => (
          <Card element={movie} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
