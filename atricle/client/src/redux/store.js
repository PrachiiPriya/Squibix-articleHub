import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';
import preferencesReducer from './preferencesSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    preferences: preferencesReducer,
    auth: authReducer,
  },
});
