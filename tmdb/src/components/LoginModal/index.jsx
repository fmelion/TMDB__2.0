import React from 'react';
import './_style.scss';
import ButtonModal from '../../commons/ButtonModal';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function LoginModal({ showLoginModal, setShowLoginModal }) {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await axios.post('http://localhost:3001/login', {
        username: usernameInput.value,
        password: passwordInput.value,
      });

      console.log(user);

      localStorage.setItem('token', user.data.token)
    } catch (err) {
      console.log('There was an error', err);
    }
  };

  return (
    <div className={`modalLogin ${showLoginModal ? 'active' : ''}`}>
      <form onSubmit={handleSubmit} className='loginForm'>
        <div>
          <input
            type='text'
            className='loginForm__username'
            placeholder='Username'
            aria-label='username'
            {...usernameInput}
          />

          <input
            type='text'
            className='loginForm__password'
            placeholder='Password'
            aria-label='password'
            {...passwordInput}
          />

          <button className='loginForm__submit' aria-label='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
