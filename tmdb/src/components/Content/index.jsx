import React from 'react';
import CardGrid from '../../commons/CardGrid';
import './_style.scss';

function Content({ movies }) {
  return (
    <div className='content'>
      <CardGrid movies={movies} />
    </div>
  );
}

export default Content;
