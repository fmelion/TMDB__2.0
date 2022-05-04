import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import tmdbApiFetch from '../../utils/tmdbApiFetch';

export const getMovies = createAsyncThunk(
  'GET_MOVIES',
  ({ type, genreId, searchString }) => {
    const link = tmdbApiFetch({ type, genreId, searchString });

    return axios.get(`${link}`).then(res => {
      return res.data.results;
    });
  }
);

export const getMoviesReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
});

export default getMoviesReducer;
