import React from 'react';
import './_style.scss';
import ButtonModal from '../../commons/ButtonModal';
import genre from '../genres';
import { getMovies } from '../../state/reducers/getMovies';
import { useDispatch } from 'react-redux';

function ModalMenu({ setShowMenu, showMenu }) {
  const dispatch = useDispatch();

  const handleOnClick = id => {
    dispatch(getMovies({ type: 'genre', genreId: id }));
    setShowMenu(false);
  };

  return (
    <div className={`modalMenu ${showMenu ? 'active' : ''}`}>
      <div className='modalMenu__title'>Genres</div>
      <div className='modalMenu__container'>
        {genre.genres.map(genre => (
          <ButtonModal
            onClick={() => handleOnClick(genre.id)}
            key={genre.id}
          >
            <div className='modalMenu__container--item'>{genre.name}</div>
          </ButtonModal>
        ))}
      </div>
      <div className='modalMenu__closeModal'>
        <ButtonModal onClick={() => setShowMenu(false)}>
          <p className='modalMenu__closeModal--x'>X</p>
        </ButtonModal>
      </div>
    </div>
  );
}

export default ModalMenu;
