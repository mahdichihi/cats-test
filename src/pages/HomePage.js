import React from "react";
import CatBreedsSelector from "../components/cats/CatBreedsSelector";
import CatsGallery from "../components/cats/CatsGallery";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <CatBreedsSelector />
      <CatsGallery />
    </div>
  );
};

export default HomePage;
