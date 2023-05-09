import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Bootcamp_Crossover_2">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
