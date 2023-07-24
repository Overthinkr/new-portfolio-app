import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedin: false,
  },
  reducers: {
    toggleLoggedIn(state) {
      state.loggedin = !state.loggedin;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
