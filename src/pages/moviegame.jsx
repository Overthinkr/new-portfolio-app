import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/navbar.component";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movies.slice";
import MovieRatings from "../components/movieratings.component";
import axios from "axios";

export default function MovieGame() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [movies, setMovies] = useState([]);

  const [results, setResults] = useState([]);

  const displayRatings = async (names) => {
    const replies = names.map((name) =>
      axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3bf98afbe95c4d4b4fd292ed2e9eedab&query=${name}`
      )
    );

    const responses = await Promise.all(replies);

    const movieIds = responses
      .map((response) => response.data.results[0]?.id)
      .filter((id) => id);

    const movieReplies = movieIds.map((id) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3bf98afbe95c4d4b4fd292ed2e9eedab`
      )
    );

    const movieResponses = await Promise.all(movieReplies);

    const voteAverages = movieResponses.map(
      (movieResponse) => movieResponse.data.vote_average
    );

    const allVoteAverage =
      voteAverages.reduce((acc, curr) => acc + curr, 0) / voteAverages.length;

    setResults([allVoteAverage]);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleMovies = (event) => {
    setMovies([...movies, event.target.value]);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
        <div className="flex flex-col movie-body pt-[130px] px-2 mx-28 gap-8">
          <div className="movie-headers flex flex-col gap-4">
            <h1 className="text-4xl text-back font-semibold">
              LET'S RATE YOUR TASTE
            </h1>
            <h2 className="tracking-wider font-bold"> CUZ WHY NOT?</h2>
          </div>
          <div className="movie-deets flex flex-col gap-2">
            <p> Welcome to my taste game!</p>
            <p>
              Soooooo, How this works is: You pick 3 tv/movies that come right
              outta yer head and we calculate a score for ye based on its
              popularity and ratings.
            </p>
            <p> Go ahead, give it a shot 👍</p>
          </div>
          <div className="movie-form flex flex-col mx-4">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit((data) => {
                dispatch(movieActions.setMovies(movies));
                setSubmitted(true);
                displayRatings(movies);
              })}
            >
              <input
                {...register("movie1", { required: "This is required!" })}
                type="text"
                placeholder="Enter Movie/Series one:"
                onChange={handleMovies}
                className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md"
              />
              {errors.movie1 && (
                <span className="text-red-500">{errors.movie1.message}</span>
              )}
              <input
                {...register("movie2", { required: "This is required!" })}
                type="text"
                placeholder="Enter Movie/Series two:"
                onChange={handleMovies}
                className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md"
              />
              {errors.movie2 && (
                <span className="text-red-500">{errors.movie2.message}</span>
              )}
              <input
                {...register("movie3", { required: "This is required!" })}
                type="text"
                placeholder="Enter Movie/Series three:"
                onChange={handleMovies}
                className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md"
              />
              {errors.movie3 && (
                <span className="text-red-500">{errors.movie3.message}</span>
              )}
              <div className="flex flex-col submit-box bg-toppage m-auto p-3 rounded-xl mt-3 drop-shadow-lg">
                <button type="submit bg-white">Submit</button>
              </div>
            </form>
          </div>
          <div className="movie-ratings">
            {submitted && <MovieRatings results={results} />}
          </div>
        </div>
      </div>
    </>
  );
}
