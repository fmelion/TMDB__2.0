import React from 'react';
import './_style.scss';


const ButtonModal = ({ children, onClick }) => {
  return (
    <button className='modalButton' onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonModal;
