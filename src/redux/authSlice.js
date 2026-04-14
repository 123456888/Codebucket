import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    currentUser: null,
  },

  reducers: {

    registerUser: (state, action) => {
      const newUser = {
        id: Date.now() + Math.random(),
        ...action.payload,
      };

      state.users.push(newUser);
      state.currentUser = newUser;
    },

    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },

    logoutUser: (state) => {
      state.currentUser = null;
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter(
        user => user.email !== action.payload
      );

      state.currentUser = null;
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
} = authSlice.actions;

export default authSlice.reducer;