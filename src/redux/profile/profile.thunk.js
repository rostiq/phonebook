import { privateApi, token } from '../../http/http';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAuthToken } from 'redux/auth/auth.selector';

export const getProfileThunk = createAsyncThunk(
  'profile',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    if (!stateToken) {
      return rejectWithValue();
    }

    token.set(stateToken.token);
    const { data } = await privateApi.get('/users/current');
    return data;
  }
);
