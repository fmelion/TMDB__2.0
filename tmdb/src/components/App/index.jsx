import * as React from 'react';
import Navbar from '../Navbar';
import Content from '../Content';
import './_style.scss';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../state/reducers/getMovies';
import {getUser} from '../../state/reducers/userReducer'

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies({ type: 'popularMovies' }));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  

  return (
    <div className='container'>
      <Navbar />
      <Content />
    </div>
  );
}
