import "./App.css";

import React from "react";
import CatBreedsSelector from "./components/cats/CatBreedsSelector";
import CatsGallery from "./components/cats/CatsGallery";

const App = () => {
  return (
    <div>
      <CatBreedsSelector />
      <CatsGallery />
    </div>
  );
};

export default App;
