import React from 'react';
import './_style.scss';
import ButtonModal from '../../commons/ButtonModal';
import genre from '../genres';

function ModalMenu({ setShowMenu, showMenu }) {
  return (
    <div className={`modalMenu ${showMenu ? 'active' : ''}`}>
      <div className='modalMenu__title'>Genres</div>
      <div className='modalMenu__container'>
        {genre.genres.map(genre => (
          <div className='modalMenu__container--item' key={genre.id}>
            {genre.name}
          </div>
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
