import React from "react";
import { useSelector } from "react-redux";

export default function MovieRatings({ results }) {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-back font-semibold">{results}/10</h1>
      </div>
    </>
  );
}
