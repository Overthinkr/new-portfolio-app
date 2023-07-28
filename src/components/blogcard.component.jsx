import React from "react";

export default function BlogCard({ title, content, author, authorimg }) {
  return (
    <div className="blog-card flex flex-col bg-white text-black gap-3 p-4 rounded-2xl drop-shadow-lg first:col-span-2 justify-between">
      <div className="blog-card-header flex  justify-between items-center max-h-5 overflow-hidden">
        <h3 className="text-xl font-bold overflow-hidden">
          {title.toUpperCase()}
        </h3>
      </div>
      <div className="blog-card-body h-36 overflow-hidden">
        <p
          className="text-lg overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </p>
      </div>
      <div className="blog-footer flex flex-row gap-4">
        <img src={authorimg} alt="author" className="rounded-full w-8 h-8" />
        <p className="text-lg font-semibold">{author}</p>
      </div>
    </div>
  );
}
