import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import axios from "axios";
import { Spinner, FormSelect, Container } from "react-bootstrap";
import { BreedContext } from "../../store/catContext";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  position: fixed;
  left: 0;
  right: 0;
  top: 128px;
  z-index: 1;
  padding: 2rem 0 0;
  background: white;
`;
const StyledFormSelect = styled(FormSelect)`
  margin: 0px !important;
  box-shadow: 0px 20px 33px 0px #ffffffcf;
  cursor: pointer;
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const StyledSpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
`;

interface Breed {
  id: string;
  name: string;
}

const CatBreedsSelector: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { selectedBreed, setSelectedBreed } = useContext(BreedContext);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get<Breed[]>(
          "https://api.thecatapi.com/v1/breeds"
        );
        setBreeds(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchBreeds();
  }, []);

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const breedId = event.target.value;
    setSelectedBreed(breedId);
  }

  return (
    <StyledContainer>
      {loading ? (
        <SpinnerContainer>
          <StyledSpinner animation="border" variant="secondary" />
        </SpinnerContainer>
      ) : (
        <>
          {breeds.length > 0 ? (
            <StyledFormSelect
              className="mb-3"
              value={selectedBreed ?? ""}
              onChange={handleSelectChange}
            >
              <option value="">Select a breed</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </StyledFormSelect>
          ) : (
            <p>
              Apologies but we could not load new cats for you at this time!
              Miau!
            </p>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default CatBreedsSelector;
