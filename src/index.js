import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/aboutmayank";
import MovieGame from "./pages/moviegame";
import Blog from "./pages/blog";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/login";
import { UserProvider } from "./context/user.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //loader:
  },
  {
    path: "/about",
    element: <About />,
    //loader:
  },
  {
    path: "/movie-game",
    element: <MovieGame />,
    //loader:
  },
  {
    path: "/blog",
    element: <Blog />,
    //loader:
  },
  {
    path: "/login",
    element: <Login />,
    //loader:
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
