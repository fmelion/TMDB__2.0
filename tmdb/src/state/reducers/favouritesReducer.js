import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

export const getFavourite = createAsyncThunk('GETFAV', () => {
  const token = localStorage.getItem('token');

  return axios
    .get(`http://localhost:3001/favourites`, {
      headers: {
        Authorization: token,
      },
    })
    .then(res => {
      return res.data;
    });
});

export const addFavourite = createAsyncThunk('ADDFAV', ({ movieId }) => {
  const token = localStorage.getItem('token');
  return axios
    .post(
      'http://localhost:3001/favourites',
      { movieId },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(() =>
      axios.get('http://localhost:3001/favourites', {
        headers: {
          Authorization: token,
        },
      })
    )
    .then(res => res.data);
});

export const removeFavourite = createAsyncThunk('REMOVEFAV', ({ movieId }) => {
  const token = localStorage.getItem('token');

  console.log(token, movieId);

  return axios
    .delete(
      `http://localhost:3001/favourites/${movieId}`,
      {
        headers: {
          Authorization: token,
        },
      },
    )
    .then(() =>
      axios.get('http://localhost:3001/favourites', {
        headers: {
          Authorization: token,
        },
      })
    )
    .then(res => res.data);
});

const favouritesReducer = createReducer([], {
  [getFavourite.fulfilled]: (state, action) => action.payload,
  [removeFavourite.fulfilled]: (state, action) => action.payload,
  [addFavourite.fulfilled]: (state, action) => action.payload,
});

export default favouritesReducer;
