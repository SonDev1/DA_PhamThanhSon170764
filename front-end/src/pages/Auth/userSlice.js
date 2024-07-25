// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await userApi.register(payload);
    return data.user;
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const data = await userApi.login(payload);
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('userId', data.userId);
    return data.user;
  }
);

export const update = createAsyncThunk(
  'user/update',
  async (payload) => {
    const { id, ...userData } = payload;
    console.log('update' ,payload);
    const response = await userApi.update(id, userData);
    return response.data.user; 
  }
);



const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: localStorage.getItem('userId') || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('userId');
      state.current = {};
      state.settings = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
