import React, { useState } from 'react';
import './_style.scss';
import Rating from '../../utils/Rating/Rating';
import ButtonModal from '../ButtonModal';
import FilmModal from '../FilmModal';

function Card({ element }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='wrapper'>
      <ButtonModal onClick={() => setShowModal(true)}>
        <div className='card'>
          <div className='card__image'>
            <img
              className='card__image--img'
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.title}
            />
            <Rating rate={element.vote_average * 10} />
          </div>

          <div className='card__title'>
            <p className='card__title--text'>{element.title}</p>
          </div>

          <div className='card__content'>
            <p className='card__content--text'>{`${element.overview.slice(
              0,
              150
            )}...`}</p>
          </div>
        </div>
      </ButtonModal>
      <FilmModal
        showModal={showModal}
        setShowModal={setShowModal}
        element={element}
      ></FilmModal>
    </div>
  );
}

export default Card;
