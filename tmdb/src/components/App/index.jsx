import * as React from 'react';
import Navbar from '../Navbar';
import Content from '../Content';
import Search from '../Search';
import './_style.scss';
import { useDispatch } from 'react-redux';
import { getUser } from '../../state/reducers/userReducer';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const dispatch = useDispatch();

 

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/genre/:id' element={<Search />} />
      </Routes>
    </div>
  );
}
