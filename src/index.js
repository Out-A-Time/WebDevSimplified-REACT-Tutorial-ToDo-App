import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React Stric Mode removed to make Local Storage work.

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <App />
);
