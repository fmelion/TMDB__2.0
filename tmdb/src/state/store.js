import { configureStore } from '@reduxjs/toolkit';
import getMoviesReducer from './reducers/getMovies';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    movies: getMoviesReducer,
    user: userReducer,
  },
});

export default store;
