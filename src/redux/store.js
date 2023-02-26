import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer, filterReducer } from './contacts.slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth.slice';
import { profileReducer } from './profile/profile.slice';
import { authInitState } from './auth/auth.init-state';
import { profileInitState } from './profile/profile.init-state';
import { contactsInitState } from './contacts.init-state';

export const initState = {
  auth: authInitState,
  profile: profileInitState,
  contacts: contactsInitState,
  filter: ''
}

export const store = configureStore({
  preloadedState: initState,
  reducer: { 
    auth: authReducer,
    profile: profileReducer,
    contacts: phonebookReducer, 
    filter: filterReducer
   },
  devTools: true, 
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);