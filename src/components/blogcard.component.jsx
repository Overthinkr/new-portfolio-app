import React, { useContext, useState } from "react";
import { db } from "../firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../context/user.context";

export default function BlogCard({
  title,
  content,
  author,
  authorimg,
  id,
  blogs,
  setBlogs,
}) {
  const [blogModal, setBlogModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const { user } = useContext(UserContext);

  const handleEdit = async () => {
    const docToEdit = doc(db, "blogposts", id);
    await updateDoc(docToEdit, {
      Title: newTitle,
      Content: newContent,
    });
    const newBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          Title: newTitle,
          Content: newContent,
        };
      } else {
        return blog;
      }
    });
    setBlogs(newBlogs);
    setEditModal(false);
  };

  const handleDelete = async () => {
    const docToDelete = doc(db, "blogposts", id);
    await deleteDoc(docToDelete);

    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <>
      <div
        className={`blog-card flex flex-col cursor-pointer bg-white text-black gap-3 p-4 rounded-2xl drop-shadow-lg hover:drop-shadow-2xl col-span-${Math.ceil(
          Math.random() * 2
        )} justify-between`}
      >
        <div className="blog-card-header flex flex-row justify-between items-center max-h-5 overflow-hidden">
          <h3 className="text-xl font-bold overflow-hidden">
            {title.toUpperCase()}
          </h3>
          <div className="edit-options flex flex-row gap-2">
            {user?.email === author && (
              <>
                <span
                  className="material-icons cursor-pointer text-blue-600"
                  onClick={() => {
                    setEditModal(true);
                  }}
                >
                  edit
                </span>
                <span
                  className="material-icons cursor-pointer text-red-600"
                  onClick={() => {
                    setDeleteModal(true);
                  }}
                >
                  delete
                </span>
              </>
            )}
          </div>
        </div>
        <div
          className="blog-card-body h-36 overflow-hidden"
          onClick={() => {
            setBlogModal(true);
          }}
        >
          <p
            className="text-lg whitespace-pre-wrap"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            {content}
          </p>
        </div>
        <div className="blog-footer flex flex-row gap-4 overflow-hidden">
          <img src={authorimg} alt="author" className="rounded-full w-8 h-8" />
          <p className="text-lg font-semibold">{author}</p>
        </div>
      </div>
      {blogModal && (
        <div className="blog-modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="blog-modal-content flex flex-col bg-gradient-to-b from-bottompage to-toppage text-black gap-3 p-4 rounded-2xl drop-shadow-lg w-[80%]">
            <div className="blog-modal-header flex flex-row justify-between items-center px-2">
              <h3 className="text-xl font-bold">{title.toUpperCase()}</h3>
              <span
                className="material-icons cursor-pointer text-red-600"
                onClick={() => {
                  setBlogModal(false);
                }}
              >
                close
              </span>
            </div>
            <div className="blog-modal-body h-96 overflow-y-auto p-4 border-2 border-black whitespace-pre-line">
              <p className="text-lg">{content}</p>
            </div>
            <div className="blog-footer flex flex-row gap-4 px-2">
              <img
                src={authorimg}
                alt="author"
                className="rounded-full w-8 h-8"
              />
              <p className="text-lg font-semibold">{author}</p>
            </div>
          </div>
        </div>
      )}
      {editModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-[90%] rounded-3xl flex flex-col justify-center items-center p-8 gap-6">
            <div className="modal-header flex flex-row justify-between items-center w-full">
              <h3 className="text-2xl font-semibold text-center">Edit Blog</h3>
              <span
                className="material-icons cursor-pointer text-red-600"
                onClick={() => {
                  setEditModal(false);
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
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
              <textarea
                type="text"
                placeholder="Content..."
                className="rounded-3xl ring-offset-1 ring-2 py-2 px-3 drop-shadow-md bg-[#e8f0fe] h-80 whitespace-pre"
                wrap="hard"
                value={newContent}
                onChange={(e) => {
                  setNewContent(e.target.value);
                }}
              />
              <button
                className="bg-indigo text-white rounded-3xl p-2 px-4 hover:bg-indigo-600 hover:drop-shadow-xl transition-all active:transform active:scale-[.98]"
                onClick={() => {
                  handleEdit();
                }}
              >
                Edit Blog
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteModal && (
        <div className="delete-modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="delete-modal-content flex flex-col bg-gradient-to-b from-bottompage to-toppage text-black gap-3 p-4 rounded-2xl drop-shadow-lg w-[32%] justify-center items-center">
            <div className="delete-modal-header items-center">
              <h3 className="text-xl font-bold">Delete Blog</h3>
            </div>
            <div className="delete-modal-body items-center">
              <p className="text-lg">
                Are you sure you want to delete this blog?
              </p>
            </div>
            <div className="delete-modal-footer flex flex-row gap-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  setDeleteModal(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  handleDelete();
                  setDeleteModal(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
