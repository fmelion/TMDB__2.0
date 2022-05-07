import React, { useState } from 'react';
import './_style.scss';
import { MdSearch, MdAccountCircle, MdMenu } from 'react-icons/md';
import ButtonModal from '../../commons/ButtonModal';
import ModalMenu from '../../utils/ModalMenu';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../state/reducers/getMovies';
import LoginModal from '../LoginModal';

function Navbar() {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const searchString = useInput('');

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getMovies({ type: 'search', searchString: searchString.value }));
    document.getElementById('myInput').value = '';
  };

  return (
    <nav className='navbar'>
      <ButtonModal onClick={() => setShowMenu(true)}>
        <MdMenu className='navbar__menu' />
      </ButtonModal>

      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu}></ModalMenu>

      <ButtonModal>
        <h2
          className='navbar__home'
          onClick={() => dispatch(getMovies({ type: 'popularMovies' }))}
        >
          tmdb!
        </h2>
      </ButtonModal>

      <form onSubmit={handleSubmit} className='navbar__search'>
        <div>
          <input
            type='text'
            className='navbar__search--input'
            placeholder='Search movies'
            aria-label='search'
            {...searchString}
            id='myInput'
          />

          <button className='navbar__search--submit' aria-label='submit search'>
            <MdSearch className='navbar__search--submit--icon' />
          </button>
        </div>
      </form>

      <div className='navbar__user'>
        {/* <MdAccountCircle className='navbar__user--icon' />
        <div className='navbar__user--name'>fmelion</div> */}

        <ButtonModal onClick={() => setShowLoginModal(true)}>Login</ButtonModal>

        <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}></LoginModal>
      </div>
    </nav>
  );
}

export default Navbar;
