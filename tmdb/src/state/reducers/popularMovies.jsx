import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

export const popularMovies = createAsyncThunk('POPULAR_MOVIES', () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    .then(res => {
      return res.data.results;
    });
});

export const popularMoviesReducer = createReducer([], {
  [popularMovies.fulfilled]: (state, action) => action.payload,
});

export default popularMoviesReducer;