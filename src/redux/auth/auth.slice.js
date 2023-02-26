import {STATUS} from '../constants';
import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import {authLoginThunk, authLogOutThunk} from './auth.thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authLoginThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = STATUS.error;
      })
      .addCase(authLogOutThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(authLogOutThunk.fulfilled, state => {
        state.status = STATUS.success;
        state.data = authInitState;
      })
      .addCase(authLogOutThunk.rejected, state => {
        state.status = STATUS.error;
      });},
});

export const authReducer = persistReducer({
  key: 'auth',
  storage,
}, authSlice.reducer);
