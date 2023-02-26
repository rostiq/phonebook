import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, token } from 'http/http';
import { selectAuthToken } from './auth/auth.selector';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    token.set(stateToken);
    try {
      const { data } = await privateApi.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    token.set(stateToken);
    try {
      const { data } = await privateApi.post('/contacts', newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    token.set(stateToken);
    try {
      const { id, name, number } = newContact;
      const { data } = await privateApi.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());
    token.set(stateToken);
    try {
      const { data } = await privateApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
