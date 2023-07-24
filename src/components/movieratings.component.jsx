import React from "react";

export default function MovieRatings({ results }) {
  return (
    <>
      <div className="movie-ratings flex flex-col gap-1 bg-toppage p-5 rounded-xl mx-32">
        {/* <div className="final-movies flex flex-row justify-between">
          {movies[movies.length - 1].map((movie, i) => (
            <h3 key={i} className="text-md font-[cursive] mx-[100px]">
              {movie}
            </h3>
          ))}
        </div> */}
        <div className="final-score flex flex-row gap-4 justify-between ">
          <h1 className="text-3xl text-back font-semibold">
            Your taste Score:
          </h1>
          <h1 className="text-3xl text-back font-semibold tracking-wider">
            {results[0].toFixed(1)}/10
          </h1>
        </div>
        <div className="movie-message text-center">
          <h4 className="font-bolder text-lg">
            {results[0] > 7 ? "Good Choice G" : "You can do better mate!"}
          </h4>
        </div>
      </div>
    </>
  );
}
