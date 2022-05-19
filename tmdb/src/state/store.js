import { configureStore } from '@reduxjs/toolkit';
import getMoviesReducer from './reducers/getMovies';
import userReducer from './reducers/userReducer';
import favouritesReducer from './reducers/favouritesReducer';

const store = configureStore({
  reducer: {
    movies: getMoviesReducer,
    user: userReducer,
    favourites: favouritesReducer
  },
});

export default store;
