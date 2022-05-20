import React from 'react';
import './_style.scss';
import ButtonModal from '../ButtonModal';
import Rating from '../../utils/Rating/Rating';
import FavButton from '../FavButton';
import { useSelector } from 'react-redux';

const FilmModal = ({ showModal, setShowModal, element }) => {
  const user = useSelector(state => state.user);
  return (
    <div className={`filmModal ${showModal ? 'active' : ''}`}>
      <div className='filmModal__wrapper'>
        <div className='filmModal__image'>
          <img
            className='filmModal__image--img'
            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
            alt={element.title}
          />
          <div className='filmModal__image--rate'>
            <Rating rate={element.vote_average * 10} />
          </div>
        </div>

        <div className='filmModal__content'>
          <h2 className='filmModal__content--title'>{element.title}</h2>
          <p className='filmModal__content--text'>{element.release_date}</p>
          <p className='filmModal__content--text'>{`${element.overview}`}</p>
          {user.id ? <FavButton element={element} /> : null}
        </div>

        <div className='filmModal__close'>
          <ButtonModal onClick={() => setShowModal(false)}>
            <div className='filmModal__close--x'>x</div>
          </ButtonModal>
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
