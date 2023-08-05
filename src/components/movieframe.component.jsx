import React from "react";

export default function MovieFrame({ movie, image }) {
  return (
    <div className=" flex flex-col items-center">
      <img src={image} alt="alt" />
      <p className="m-3">{movie}</p>
    </div>
  );
}
