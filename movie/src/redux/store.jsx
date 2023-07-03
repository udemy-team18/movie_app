import { configureStore } from '@reduxjs/toolkit';
import movie_store from './movie_store';

const store = configureStore({
  reducer: {
    MovieStore: movie_store,
  },
});

export default store;
