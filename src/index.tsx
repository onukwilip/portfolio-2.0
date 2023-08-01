import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
