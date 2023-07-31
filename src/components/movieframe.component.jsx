import React from "react";

export default function MovieFrame({ movie, image }) {
  return (
    <div>
      <p>{movie}</p>
      <img src={image} alt="alt" />
    </div>
  );
}
