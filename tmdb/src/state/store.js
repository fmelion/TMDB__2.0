import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import popularMoviesReducer from './reducers/popularMovies';

const store = configureStore({
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: popularMoviesReducer,
  },
});

export default store;
