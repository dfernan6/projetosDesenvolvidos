// src/app/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import saboresReducer from '../features/sabores/saboresSlice';

export const store = configureStore({
  reducer: {
    sabores: saboresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;