import { configureStore } from '@reduxjs/toolkit';
import { companiesDirectoryReducer } from '../entities/companiesDirectory';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { companiesDirectory: companiesDirectoryReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
