import React from 'react';
import './_style.scss';
import { MdSearch, MdAccountCircle, MdMenu } from 'react-icons/md';

function Navbar() {
  return (
    <nav className='navbar'>
      <MdMenu className='navbar__menu' />

      <button className='navbar__home'>tmdb!</button>

      <div className='navbar__search'>
        <input
          type='text'
          className='navbar__search--input'
          placeholder='Search movies'
          aria-label='search'
        />

        <button className='navbar__search--submit' aria-label='submit search'>
          <MdSearch className='navbar__search--submit--icon' />
        </button>
      </div>

      <div className='navbar__user'>
        <MdAccountCircle className='navbar__user--icon' />

        <div className='navbar__user--name'>fmelion</div>
      </div>
    </nav>
  );
}

export default Navbar;
