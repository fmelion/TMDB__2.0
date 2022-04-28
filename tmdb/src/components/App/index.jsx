import * as React from 'react';
import Navbar from '../Navbar';
import Content from '../Content';
import './_style.scss';

export default function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Content/>
    </div>
  );
}
