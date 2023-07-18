import React from "react";

export default function Button({ btnimg, btntxt }) {
  return (
    <div className="h-[60px] bg-white rounded-2xl flex justify-center items-center cursor-pointer drop-shadow-xl transform transition-transform hover:scale-105 border-2 border-white">
      <div className="flex flex-row my-2 justify-between mx-6 items-center gap-5">
        <img
          src={btnimg}
          alt="button"
          className="rounded-md"
          width={40}
          height={40}
        />
        <p className="text-center text-2xl font-bold text-indigo">{btntxt}</p>
      </div>
    </div>
  );
}
