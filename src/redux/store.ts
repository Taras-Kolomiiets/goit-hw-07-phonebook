import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-slice';
import contactsReducer from './contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware(),
  logger,
  contactsApi.middleware,
];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});



