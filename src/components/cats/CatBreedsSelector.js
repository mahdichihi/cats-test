import React, { useState, useEffect } from "react";
import axios from "axios";
import CatsGallery from "./CatsGallery";

const CatBreedsSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/breeds");
        setBreeds(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchBreeds();
  }, []);

  function handleSelectChange(event) {
    setSelectedBreed(event.target.value);
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {breeds.length > 0 ? (
            <select value={selectedBreed} onChange={handleSelectChange}>
              <option value="">Select a breed</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          ) : (
            <p>
              Apologies but we could not load new cats for you at this time!
              Miau!
            </p>
          )}
          {selectedBreed && <CatsGallery selectedBreed={selectedBreed} />}
        </>
      )}
    </div>
  );
};

export default CatBreedsSelector;
