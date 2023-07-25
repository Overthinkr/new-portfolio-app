import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: false,
    info: [],
  },
  reducers: {
    toggleLoggedIn(state) {
      state.login = !state.login;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
