import React from 'react';
import './_style.scss';
import ButtonModal from '../../commons/ButtonModal';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function LoginModal({
  showLoginModal,
  setShowLoginModal,
  setShowRegisterModal,
}) {
  const emailInput = useInput('');
  const passwordInput = useInput('');

  const handleOnRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await axios.post('http://localhost:3001/login', {
        email: emailInput.value,
        password: passwordInput.value,
      });
      document.location.reload(true);

      localStorage.setItem('token', user.data.token);

      setShowLoginModal(false);
    } catch (err) {
      alert('Login error');
    }
  };

  return (
    <div className={`modal ${showLoginModal ? 'active' : ''}`}>
      <div className='modal__container'>
        <form onSubmit={handleSubmit} className='modal__form'>
          <h3 className='modal__form--title'>Sign in</h3>
          <input
            type='text'
            className='modal__form--input'
            placeholder='Email'
            aria-label='email'
            {...emailInput}
          />

          <input
            type='password'
            className='modal__form--input'
            placeholder='Password'
            aria-label='password'
            {...passwordInput}
          />

          <button className='modal__form--submit' aria-label='submit'>
            Sign in
          </button>
        </form>
        <ButtonModal onClick={handleOnRegister}>
          <div className='modal__switch'>
            Don't have an account? Create one
          </div>
        </ButtonModal>
        <ButtonModal onClick={() => setShowLoginModal(false)}>
          <p className='closeModal'> x </p>
        </ButtonModal>
      </div>
    </div>
  );
}

export default LoginModal;
