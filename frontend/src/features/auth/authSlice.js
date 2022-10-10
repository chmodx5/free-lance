import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus: (state) => {
      state.is_authenticated = !state.is_authenticated;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;

export default authSlice.reducer;
