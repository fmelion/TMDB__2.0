import { useSelector, useDispatch } from 'react-redux';
import {
  addFavourite,
  removeFavourite,
} from '../../state/reducers/favouritesReducer';

const FavButton = ({ element }) => {

  const dispatch = useDispatch();

  const favs = useSelector(state => state.favourites);

  let fav = favs?.filter(favorito => favorito.movieId === element.id);

  const handleOnClick = accion => {
    if (accion === 'remove') {
      dispatch(removeFavourite({movieId: element.id }));
    } else {
      dispatch(addFavourite({movieId: element.id }));
    }
  };

  return fav[0] ? (
    <div className='buttons'>
      <button className='button is-success' onClick={() => handleOnClick('remove')}>
        Remove from Favourite
      </button>
    </div>
  ) : (
    <div className='buttons'>
      <button className='button is-danger' onClick={() => handleOnClick('add')}>
        Add to Favourite
      </button>
    </div>
  );
};

export default FavButton;