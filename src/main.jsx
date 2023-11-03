import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import Project from "./Project.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
