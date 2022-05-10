import React from 'react';
import './_style.scss';
import ButtonModal from '../../commons/ButtonModal';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function RegisterModal({
  showRegisterModal,
  setShowRegisterModal,
  setShowLoginModal,
}) {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const usernameInput = useInput('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userRegistered = await axios.post(
        'http://localhost:3001/register',
        {
          email: emailInput.value,
          username: usernameInput.value,
          password: passwordInput.value,
        }
      );

      if (userRegistered.data.user.id) {
        const userLoggedIn = await axios.post('http://localhost:3001/login', {
          email: emailInput.value,
          password: passwordInput.value,
        });
        document.location.reload(true);

        localStorage.setItem('token', userLoggedIn.data.token);

        setShowRegisterModal(false);
      }
    } catch (err) {
      console.log('There was an error', err);
    }
  };

  return (
    <div className={`modalRegister ${showRegisterModal ? 'active' : ''}`}>
      <form onSubmit={handleSubmit} className='modalRegister__form'>
        <h3 className='modalRegister__form--title'>Register</h3>
        <input
          type='text'
          className='modalRegister__form--input'
          placeholder='Email'
          aria-label='email'
          required
          {...emailInput}
        />

        <input
          type='text'
          className='modalRegister__form--input'
          placeholder='Username'
          aria-label='username'
          {...usernameInput}
          required
        />

        <input
          type='password'
          className='modalRegister__form--input'
          placeholder='Password'
          aria-label='password'
          {...passwordInput}
          required
        />

        <button
          className='modalRegister__form--submit'
          aria-label='submit'
          onClick={() => handleSubmit}
        >
          Register
        </button>
        <ButtonModal>
          <div className='modalRegister__form--login'>
            Have an account? Sign in
          </div>
        </ButtonModal>
      </form>
    </div>
  );
}

export default RegisterModal;
