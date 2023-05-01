import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { BreedProvider } from "./store/catContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BreedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BreedProvider>
  </React.StrictMode>
);
