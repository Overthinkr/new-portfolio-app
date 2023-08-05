import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import BlogCard from "../components/blogcard.component";
import { UserContext } from "../context/user.context";

export default function Blog() {
  const navigate = useNavigate();
  const [addBlog, setAddBlog] = useState(false);

  const { isLoggedIn } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const blogCollectionRef = collection(db, "blogposts");
  const [blogs, setBlogs] = useState([]);
  const [titleQuery, setTitleQuery] = useState("");
  const [authorQuery, setAuthorQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      const blogsData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogs(blogsData);
    };

    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddBlog = async (event) => {
    event.preventDefault();
    await addDoc(blogCollectionRef, {
      Title: title,
      Content: content,
      Author: auth.currentUser.email,
      AuthorImg: auth.currentUser.photoURL,
    });

    const newBlog = {
      Title: title,
      Content: content,
      Author: auth.currentUser.email,
      AuthorImg: auth.currentUser.photoURL,
    };

    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);

    setAddBlog(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-toppage to-bottompage min-h-screen bg-fixed z-0">
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
              <div className="flex flex-col gap-6 w-[98%]">
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-3xl ring-offset-1 ring-2 py-2 px-3 drop-shadow-md bg-[#e8f0fe] whitespace-pre"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <textarea
                  type="text"
                  placeholder="Content..."
                  className="rounded-3xl ring-offset-1 ring-2 py-2 px-3 drop-shadow-md bg-[#e8f0fe] h-80 whitespace-pre"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
                <button
                  className="bg-indigo text-white rounded-3xl p-2 px-4 hover:bg-indigo-600 hover:drop-shadow-xl transition-all active:transform active:scale-[.98]"
                  onClick={handleAddBlog}
                >
                  Add Blog
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="blog-body flex flex-col pt-[110px] px-2 mx-28 gap-5">
          {isLoggedIn ? (
            <div
              className="bg-blue-600 text-white m-auto px-5 py-3 justify-center align-middle text-center cursor-pointer flex flex-row gap-4 rounded-xl drop-shadow-xl"
              onClick={() => {
                setAddBlog(true);
              }}
            >
              <span className="material-icons"> add </span>
              <p> Add a new Blog </p>
            </div>
          ) : (
            <div
              className="bg-blue-600 text-white m-auto px-5 py-3 justify-center align-middle text-center cursor-pointer flex flex-row gap-4 rounded-xl drop-shadow-xl"
              onClick={() => {
                navigate("/login");
              }}
            >
              <p> Login/Signup to add your own blogs! </p>
            </div>
          )}
          <div className="blog-search flex flex-row w-full gap-6 justify-center">
            <input
              type="text"
              placeholder="Enter Title to search:"
              className="rounded-3xl ring-offset-1 ring-2 py-2 px-3 drop-shadow-md bg-[#e8f0fe] whitespace-pre w-full"
              onChange={(e) => {
                setTitleQuery(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Author email to search:"
              className="rounded-3xl ring-offset-1 ring-2 py-2 px-3 drop-shadow-md bg-[#e8f0fe] whitespace-pre w-full"
              onChange={(e) => {
                setAuthorQuery(e.target.value);
              }}
            />
          </div>
          <div className="blog-cards grid grid-cols-3 grid-flow-row gap-4 py-4 ">
            {blogs
              .filter(
                (blog) =>
                  blog.Title.toLowerCase().includes(titleQuery.toLowerCase()) &&
                  blog.Author.toLowerCase().includes(authorQuery.toLowerCase())
              )
              .map((blog, i) => {
                return (
                  <BlogCard
                    key={i}
                    title={blog.Title}
                    content={blog.Content}
                    author={blog.Author}
                    authorimg={blog.AuthorImg}
                    id={blog.id}
                    blogs={blogs}
                    setBlogs={setBlogs}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
