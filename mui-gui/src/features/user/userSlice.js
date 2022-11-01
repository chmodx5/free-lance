import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  authToken: "",
  user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
};

export const userSlice = createSlice({
  name: "use",
  initialState,
  reducers: {
    setIsUserLoggedIn(state, action) {
      state.isUserLoggedIn = action.payload;
    },
    setAuthToken(state, action) {
      // check if auth token is already in localStorage
      if (localStorage.getItem("auth-token")) {
        state.authToken = localStorage.getItem("auth-token");
      } else {
        state.authToken = action.payload;
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setIsUserLoggedIn, setAuthToken, setUser } = userSlice.actions;

export default userSlice.reducer;
