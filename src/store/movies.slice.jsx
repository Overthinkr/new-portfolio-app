import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies(state, action) {
      state.movies = [...state.movies, action.payload];
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
