import React, { useEffect, useState } from 'react';
import CardGrid from '../../commons/CardGrid';
import './_style.scss';
import getMovies from '../../utils/getMovies';
import { useSelector } from 'react-redux';

function Content() {

  const user = useSelector(state => state.user)

  const [trending, setTrending] = useState([]);
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [romance, setRomance] = useState([]);
  const [crime, setCrime] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [horror, setHorror] = useState([]);

  useEffect(() => {
    getMovies({ type: 'popularMovies' }).then(res => {
      setTrending(res.data.results);
      
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 28 }).then(res => {
      setAction(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 18 }).then(res => {
      setDrama(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 35 }).then(res => {
      setComedy(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 10749 }).then(res => {
      setRomance(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 80 }).then(res => {
      setCrime(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 27 }).then(res => {
      setHorror(res.data.results);
    });
  }, []);
  useEffect(() => {
    getMovies({ type: 'genre', genreId: 878 }).then(res => {
      setScifi(res.data.results);
    });
  }, []);

  useEffect(() => {
    getMovies({ type: 'genre', genreId: 12 }).then(res => {
      setAdventure(res.data.results);
    });
  }, []);

  return (
    <div className='content'>
      <CardGrid title={'Trending'} movies={trending} />
      <CardGrid title={'Action'} movies={action} />
      <CardGrid title={'Drama'} movies={drama} />
      <CardGrid title={'Adventure'} movies={adventure} />
      <CardGrid title={'Comedy'} movies={comedy} />
      <CardGrid title={'Crime'} movies={crime} />
      <CardGrid title={'Science Fiction'} movies={scifi} />
      <CardGrid title={'Horror'} movies={horror} />
      <CardGrid title={'Romance'} movies={romance} />
    </div>
  );
}

export default Content;
