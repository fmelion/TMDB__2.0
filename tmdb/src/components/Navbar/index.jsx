import React, { useState } from 'react';
import './_style.scss';
import { MdSearch, MdAccountCircle, MdMenu } from 'react-icons/md';
import ButtonModal from '../../commons/ButtonModal';
import ModalMenu from '../../utils/ModalMenu'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className='navbar'>

      <ButtonModal onClick={()=>setShowMenu(true)}>
        <MdMenu className='navbar__menu' />
      </ButtonModal>

      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu}></ModalMenu>


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
