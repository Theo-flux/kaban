'use-client';
import { configureStore } from '@reduxjs/toolkit';
import modalReducers from './features/modals/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
