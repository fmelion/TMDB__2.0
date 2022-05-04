import * as React from 'react';
import Navbar from '../Navbar';
import Content from '../Content';
import './_style.scss';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../state/reducers/getMovies';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies({type:"popularMovies"}));
  }, [dispatch]);

  return (
    <div className='container'>
      <Navbar />
      <Content />
    </div>
  );
}
