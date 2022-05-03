import React from 'react';
import './_style.scss';

import defineRating from './defineRating';

function Rating({ rate }) {
  let rating = defineRating(rate);

  return (
    <div className={`rate_container interval_${rating}`}>
      <div className='rate_container__value'>
        <div className='rate_container__value--percentage'>{`${rate}`}</div>
        <div className='rate_container__value--sign'>%</div>
      </div>
    </div>
  );
}

export default Rating;
