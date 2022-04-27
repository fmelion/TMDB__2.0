import React from 'react';
import './_style.scss';

function Card({ element }) {
  return (
    <div className='card'>
      
        <img
          className='card__image'
          src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          alt={element.title}
        />
      
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
  );
}

export default Card;
