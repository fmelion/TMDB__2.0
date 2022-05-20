import React, { useState } from 'react';
import './_style.scss';
import { MdSearch, MdMenu, MdFlightTakeoff } from 'react-icons/md';
import ButtonModal from '../../commons/ButtonModal';
import ModalMenu from '../../utils/ModalMenu';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';

import LoginModal from '../LoginRegisterModals/LoginModal';
import RegisterModal from '../LoginRegisterModals/RegisterModal';
import { deleteUser } from '../../state/reducers/userReducer';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user);

  const [showMenu, setShowMenu] = useState(false);
  const searchString = useInput('');

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    document.getElementById('myInput').value = '';
    navigate(`/search/${searchString.value}`);
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
        <h2 className='navbar__home' onClick={() => navigate('/')}>
          tmdb!
        </h2>
      </ButtonModal>

      <form onSubmit={handleSubmit} className='navbar__search'>
        <div>
          <input
            type='text'
            className='navbar__search--input'
            placeholder='Search movies'
            id='myInput'
            {...searchString}
          />

          <button className='navbar__search--submit'>
            <MdSearch className='navbar__search--submit--icon' />
          </button>
        </div>
      </form>

      <div className='navbar__user'>
        {user.id ? (
          <>
            <div className='navbar__user--name'>{user.username}</div>
            <button className='navbar__user--logOut' onClick={handleLogout}>
              <MdFlightTakeoff />
            </button>
          </>
        ) : (
          <ButtonModal onClick={() => setShowLoginModal(true)}>
            <div className='navbar__user--login'>Login</div>
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
