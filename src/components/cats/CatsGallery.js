import React, { useState, useEffect } from "react";
import axios from "axios";
// Set default header. e.g, X-API-KEY
axios.defaults.headers["X-API-KEY"] =
  "live_ZvPzcpQIu2dU7R8aMO2Z68aVRPXY5oIwKAno3nvBgM6L2MJL8jLEbVqVOTfCG5jz";

const CatsGallery = ({ selectedBreed }) => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCats() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          {
            headers: {
              "x-api-key":
                "live_ZvPzcpQIu2dU7R8aMO2Z68aVRPXY5oIwKAno3nvBgM6L2MJL8jLEbVqVOTfCG5jz",
            },
            params: {
              limit: 50,
              breed_id: selectedBreed,
            },
          }
        );
        setCatImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    if (selectedBreed) {
      // only fetch cats if a breed is selected
      fetchCats();
    }
  }, [selectedBreed]);

  return (
    <div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div>
          {catImages.map((image) => (
            <div key={image.id}>
              <img
                src={image.url}
                style={{ width: "300px" }}
                alt={`Cat ${image.id}`}
              />
              <div>View details</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatsGallery;
