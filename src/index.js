import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BreedProvider } from "./store/catContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BreedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BreedProvider>
  </React.StrictMode>
);
