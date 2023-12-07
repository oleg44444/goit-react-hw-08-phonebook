// store.js
import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/Contacts/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './Contacts/filterSlice';
import { authReducer } from './Auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
