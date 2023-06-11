'use-client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalReducers from './features/modals/modalSlice';
import taskReducers from './features/task/taskSlice';
import allStatusReducers from './features/task/allStatusSlice';
import boardReducers from './features/board/boardSlice';
import { kanbanApi } from './services/kanbanApi';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['kanbanApi'],
};

const rootReducer = combineReducers({
  modal: modalReducers,
  task: taskReducers,
  board: boardReducers,
  allStatus: allStatusReducers,
  [kanbanApi.reducerPath]: kanbanApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(kanbanApi.middleware);
  },
});

store.subscribe(() => {
  sessionStorage.setItem(
    'activeboard',
    JSON.stringify(store.getState().board.activeboard)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
