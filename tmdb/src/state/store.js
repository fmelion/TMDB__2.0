import { configureStore } from '@reduxjs/toolkit';
import getMoviesReducer from './reducers/getMovies';

const store = configureStore({
  reducer: {
    movies: getMoviesReducer,
  },
});

export default store;
