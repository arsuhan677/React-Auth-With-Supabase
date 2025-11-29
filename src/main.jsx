import ReactDOM, { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
