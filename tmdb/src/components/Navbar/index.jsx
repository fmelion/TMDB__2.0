import React, { useState } from 'react';
import './_style.scss';
import { MdSearch, MdAccountCircle, MdMenu } from 'react-icons/md';
import ButtonModal from '../../commons/ButtonModal';
import ModalMenu from '../../utils/ModalMenu';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../state/reducers/getMovies';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import { deleteUser } from '../../state/reducers/userReducer';

function Navbar() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [showMenu, setShowMenu] = useState(false);
  const searchString = useInput('');

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getMovies({ type: 'search', searchString: searchString.value }));
    document.getElementById('myInput').value = '';
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(deleteUser());
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
        {user.id ? (
          <>
            <MdAccountCircle className='navbar__user--icon' />
            <div className='navbar__user--name'>{user.username}</div>
            <button className='navbar__user--logOut' onClick={handleLogout}>
              LogOut
            </button>
          </>
        ) : (
          <ButtonModal onClick={() => setShowLoginModal(true)}>
            Login
          </ButtonModal>
        )}

        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        ></LoginModal>

        <RegisterModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
          showRegisterModal={showRegisterModal}
        ></RegisterModal>
      </div>
    </nav>
  );
}

export default Navbar;
