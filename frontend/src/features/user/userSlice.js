import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  authToken: "",
  user: {},
};

export const userSlice = createSlice({
  name: "use",
  initialState,
  reducers: {
    setIsUserLoggedIn(state, action) {
      state.isUserLoggedIn = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setIsUserLoggedIn, setAuthToken, setUser } = userSlice.actions;

export default userSlice.reducer;
