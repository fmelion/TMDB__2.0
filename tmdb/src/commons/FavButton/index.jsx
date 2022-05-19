import { useSelector, useDispatch } from 'react-redux';
import {
  addFavourite,
  removeFavourite,
} from '../../state/reducers/favouritesReducer';
import './_style.scss';
import {MdOutlineAdd,MdFavorite}  from 'react-icons/md';


const FavButton = ({ element }) => {
  const dispatch = useDispatch();

  const favs = useSelector(state => state.favourites);

  let fav = favs?.filter(favorito => favorito.movieId === element.id);

  const handleOnClick = accion => {
    if (accion === 'remove') {
      dispatch(removeFavourite({ movieId: element.id }));
    } else {
      dispatch(addFavourite({ movieId: element.id }));
    }
  };

  return fav[0] ? (
    <div className='buttonfav'>
      <button
        className='buttonfav__remove'
        onClick={() => handleOnClick('remove')}
      >
        <MdFavorite/>
      </button>
    </div>
  ) : (
    <div className='buttonfav'>
      <button className='buttonfav__add' onClick={() => handleOnClick('add')}>
      <MdOutlineAdd/>
      </button>
    </div>
  );
};

export default FavButton;
