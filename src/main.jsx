import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import "./index.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
