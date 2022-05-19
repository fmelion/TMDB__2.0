import { useSelector } from 'react-redux';

import { MdFavorite } from 'react-icons/md';

const FavButton = ({ element }) => {
  const favs = useSelector(state => state.favourites);

  let fav = favs?.filter(favorito => favorito.movieId === element.id);

  return fav[0] ? <MdFavorite className='fav' /> : null;
};

export default FavButton;
