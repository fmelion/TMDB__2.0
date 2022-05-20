import React, { useEffect, useState } from 'react';
import CardGrid from '../../commons/CardGrid';
import './_style.scss';
import { useParams } from 'react-router-dom';
import getMovies from '../../utils/getMovies';
import genre from '../../utils/genres';

function SearchGenre() {
  const { id } = useParams();

  const genreName = genre.genres.find(
    element => element.id === parseInt(id)
  ).name;

  const [genreMovies, setGenreMovies] = useState([]);

  useEffect(() => {
    getMovies({ type: 'genre', genreId: id }).then(res => {
      setGenreMovies(res.data.results);
    });
  }, [id]);

  return (
    <div className='search'>
      <CardGrid title={genreName} movies={genreMovies} />
    </div>
  );
}

export default SearchGenre;
