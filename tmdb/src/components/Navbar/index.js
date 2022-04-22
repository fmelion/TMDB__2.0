import React from 'react';
import './_style.scss';
import { MdSearch, MdAccountCircle, MdMenu } from 'react-icons/md';

function Navbar() {
  return (
    
    <nav class='navbar'>
      <div class='menu'>
        <MdMenu class='menu__icon' />
      </div>

      <button class="home">TMDB</button>

      <form action='#' class='search'>
        <input
          type='text'
          class='search__input'
          placeholder='Search Movies'
        ></input>
        <button class='search__button'>
          <MdSearch class='search__icon' />
        </button>
      </form>

      <div class='user'>
        <MdAccountCircle class='user__icon' />

        <div class='user__name'>fmelion</div>
      </div>
    </nav>
  );
}

export default Navbar;
