import React, { useEffect } from "react";
import Navbar from "../components/navbar.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.login.login);
  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed">
        <div className="blog-body flex flex-col pt-[130px] px-2 mx-28 gap-6">
          <h1 className="text-4xl text-back font-semibold">Blog Page</h1>
          <div className="blog-cards grid grid-cols-3 grid-flow-row ">
            {/* <BlogCard> */}
          </div>
        </div>
      </div>
    </>
  );
}
