import { privateApi, publicApi, token } from 'http/http';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authLoginThunk = createAsyncThunk('login', async values => {
  const { data } = await publicApi.post('/users/login', values);
  token.set(data.token);
  return data;
});

export const authLogOutThunk = createAsyncThunk('logout', async () => {
  const { data } = await privateApi.post('/users/logout');
  token.remove();
  return data;
});

