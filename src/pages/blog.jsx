import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const [addBlog, setAddBlog] = useState(false);
  console.log(addBlog);

  const isLoggedIn = useSelector((state) => state.login.login);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
        {addBlog && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white w-[90%] rounded-3xl flex flex-col justify-center items-center p-8 gap-6">
              <div className="modal-header flex flex-row justify-between items-center w-full">
                <h3 className="text-2xl font-semibold text-center">
                  Add a new Blog
                </h3>
                <span
                  className="material-icons cursor-pointer text-red-600"
                  onClick={() => {
                    setAddBlog(false);
                  }}
                >
                  close
                </span>
              </div>
              <div className="flex flex-col gap-4 w-[98%]">
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md bg-[#e8f0fe]"
                />
                <textarea
                  type="text"
                  placeholder="Content..."
                  className="rounded-3xl ring-offset-1 ring-2 p-1 px-3 drop-shadow-md bg-[#e8f0fe] h-80"
                />
                <button className="bg-indigo text-white rounded-3xl p-2 px-4 hover:bg-indigo-600 hover:drop-shadow-xl transition-all active:transform active:scale-[.98]">
                  Add Blog
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="blog-body flex flex-col pt-[130px] px-2 mx-28 gap-6">
          <div
            className="bg-blue-600 text-white m-auto px-5 py-3 justify-center align-middle text-center cursor-pointer flex flex-row gap-4 rounded-xl drop-shadow-xl"
            onClick={() => {
              setAddBlog(true);
            }}
          >
            <span className="material-icons"> add </span>
            <p> Add a new Blog </p>
          </div>
          <div className="blog-cards grid grid-cols-3 grid-flow-row ">
            {/* <BlogCard> */}
          </div>
        </div>
      </div>
    </>
  );
}
