import React, { useEffect, useState } from 'react';
import CardGrid from '../../commons/CardGrid';
import './_style.scss';
import { useParams } from 'react-router-dom';
import getMovies from '../../utils/getMovies';

function SearchMovies() {
  const { str } = useParams();

  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    getMovies({ type: 'search', searchString: str }).then(res => {
      setSearchMovies(res.data.results);
    });
  }, [str]);

  return (
    <div className='search'>
      <CardGrid title={`Results for ${str}`} movies={searchMovies} />
    </div>
  );
}

export default SearchMovies;
