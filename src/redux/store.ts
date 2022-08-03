import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/filterSlice';
import good from './slices/good/goodSlice';

export const store = configureStore({
  reducer: {
    filter,
    good,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
