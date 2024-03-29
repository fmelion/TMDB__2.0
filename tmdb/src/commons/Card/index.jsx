import React, { useState } from 'react';
import './_style.scss';
import Rating from '../../utils/Rating/Rating';
import ButtonModal from '../ButtonModal';
import FilmModal from '../FilmModal';

import FavCard from '../FavCard';
import { useSelector } from 'react-redux';

function Card({ element }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.user);

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
      {user.id ? <FavCard element={element} /> : null}
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
