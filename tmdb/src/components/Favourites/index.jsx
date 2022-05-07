import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Favourites() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:3001/protected', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        navigate('/');
      });
  }, []);

  return <div>Favourites is a protected route</div>;
}

export default Favourites;
