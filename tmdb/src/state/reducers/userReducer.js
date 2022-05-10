import axios from 'axios';
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('GET_USER', () => {
  const token = localStorage.getItem('token');

  return axios
    .get('http://localhost:3001/protected', {
      headers: {
        Authorization: token,
      },
    })
    .then(res => {
      return res.data.user;
    });
});

export const deleteUser = createAction('DELETE_USER');

const userReducer = createReducer(
  {},
  {
    [getUser.fulfilled]: (state, action) => action.payload,
    [deleteUser]: (state, action) => {
      return {};
    },
  }
);

export default userReducer;
