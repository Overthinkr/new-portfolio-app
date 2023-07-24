import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies.slice";
import loginSlice from "./login.slice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
