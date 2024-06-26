import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/navbar.component";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movies.slice";
import MovieRatings from "../components/movieratings.component";
import axios from "axios";
import tmdb from "../resources//logo.png";
import MovieFrame from "../components/movieframe.component";

export default function MovieGame() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [movies, setMovies] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
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

    const recommendationReplies = movieIds.map((result) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${result}/recommendations?api_key=3bf98afbe95c4d4b4fd292ed2e9eedab`
      )
    );

    const recommendationResponse = await Promise.all(recommendationReplies);

    const recommendations = recommendationResponse.map(
      (recommendationResponse) =>
        recommendationResponse.data.results.map((movie) => ({
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }))
    );
    setRecommendList([recommendations]);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ initialValues: { movie1: "", movie2: "", movie3: "" } });

  const handleMovies = (event, index) => {
    const updatedMovies = [...movies];
    updatedMovies[index] = event.target.value;
    setMovies(updatedMovies);
  };

  const showRatings = async () => {
    dispatch(movieActions.setMovies(movies));
    await displayRatings(movies);
    setSubmitted(true);
  };

  let recommendcount = 0;

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#6DE5FF] to-white min-h-screen bg-fixed">
        <div className="flex flex-col movie-body pt-[130px] px-2 mx-28 gap-6">
          <div className="movie-headers flex flex-col gap-4">
            <h1 className="text-4xl text-back font-semibold">
              LET'S RATE YOUR TASTE
            </h1>
          </div>
          <div className="movie-deets flex flex-col gap-2">
            <p> Welcome to my taste game!</p>
            <p>
              How this works is: You pick 3 tv/movies that come right
              outta yer head and we calculate a score for ye based on its
              popularity and ratings.
            </p>
            <p> Go ahead, give it a shot 👍</p>
          </div>
          <div className="movie-form flex flex-col mx-4">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(showRatings)}
            >
              <div className="input-field flex flex-col">
                <input
                  {...register("movie1", { required: "This is required!" })}
                  type="text"
                  placeholder="Enter Movie/Series one:"
                  onChange={(event) => handleMovies(event, 0)}
                  className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md bg-[#e8f0fe]"
                />
                {errors.movie1 && (
                  <span className="text-red-500">{errors.movie1.message}</span>
                )}
              </div>
              <div className="input-field flex flex-col">
                <input
                  {...register("movie2", { required: "This is required!" })}
                  type="text"
                  placeholder="Enter Movie/Series two:"
                  onChange={(event) => handleMovies(event, 1)}
                  className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md bg-[#e8f0fe]"
                />
                {errors.movie2 && (
                  <span className="text-red-500">{errors.movie2.message}</span>
                )}
              </div>
              <div className="input-field flex flex-col">
                <input
                  {...register("movie3", { required: "This is required!" })}
                  type="text"
                  placeholder="Enter Movie/Series three:"
                  onChange={(event) => handleMovies(event, 2)}
                  className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md bg-[#e8f0fe]"
                />
                {errors.movie3 && (
                  <span className="text-red-500">{errors.movie3.message}</span>
                )}
              </div>
              <div className="flex flex-col submit-box bg-toppage m-auto p-3 rounded-xl mt-3 drop-shadow-lg">
                <button type="submit" className="bg-inherit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="movie-ratings">
            {submitted && <MovieRatings results={results} />}
          </div>
          <div
            className="flex flex-col absolute left-1/2 bottom-2 bg-black rounded-full p-3 cursor-pointer hover:drop-shadow-2xl"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="material-icons text-white">
              keyboard_arrow_down
            </span>
          </div>
          {submitted && (
            <div className="flex flex-col gap-4 my-10">
              <h1 className="text-4xl text-back font-semibold">
                RECOMMENDATIONS FROM YOUR PICKS
              </h1>
              <h2 className="tracking-wider font-bold">
                Picked randomly from API (don't @ me)
              </h2>
              <div className="recommended-movies flex flex-row gap-16">
                {recommendList.map((recommendmovie) => {
                  return recommendmovie.map((movie, i) => {
                    if (movie.length !== 0) {
                      recommendcount++;
                      const randomIndex = Math.floor(
                        Math.random() * movie.length
                      );
                      const recommendedMovie = movie[randomIndex];
                      return (
                        <MovieFrame
                          key={i}
                          movie={recommendedMovie?.title}
                          image={recommendedMovie?.posterUrl}
                        />
                      );
                    }
                    return null;
                  });
                })}
                {recommendcount === 0 && (
                  <div className="flex flex-col gap-2">
                    <h2 className="tracking-wider">
                      Unfortunately, no recommendations :(
                    </h2>
                    <h2 className="tracking-wider">Try again!</h2>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fixed right-2 bottom-2 flex flex-row items-end gap-2">
        <p className="align-bottom">Powered By:</p>
        <a href="https://www.themoviedb.org/">
          <img className="cursor-pointer" src={tmdb} alt="tmdb" width={100} />
        </a>
      </div>
    </>
  );
}
