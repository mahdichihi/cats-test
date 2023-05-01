import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BreedContext } from "../../store/catContext";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding-top: 60px;
`;
const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
const StyledCardImg = styled(Card.Img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
const StyledCardBody = styled(Card.Body)`
  padding: 0;
  margin: 0;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;
const StyledRow = styled(Row)`
  gap: 2rem 0;
`;
const StyledButtonContainer = styled(Container)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
const StyledButton = styled(Button)`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 4px 4px;
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

const CatsGallery: React.FC = () => {
  const [catImages, setCatImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayedCats, setDisplayedCats] = useState<number>(4);
  const { selectedBreed } = useContext(BreedContext);

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

  const addCats = () => {
    setDisplayedCats(displayedCats + 4);
  };

  useEffect(() => {
    setDisplayedCats(4);
  }, [selectedBreed]);

  return (
    <StyledContainer>
      {loading ? (
        <SpinnerContainer>
          <StyledSpinner animation="border" variant="secondary" />
        </SpinnerContainer>
      ) : (
        <StyledRow>
          {catImages.slice(0, displayedCats).map((image) => (
            <StyledCol
              key={image.id}
              variant="col-4 d-flex justify-content-center"
            >
              <StyledCard style={{ width: "18rem" }}>
                <StyledCardImg variant="top" src={image.url} />
                <StyledCardBody>
                  <LinkContainer to={`/cat-details/${image.id}`}>
                    <StyledButton variant="secondary">
                      View details
                    </StyledButton>
                  </LinkContainer>
                </StyledCardBody>
              </StyledCard>
            </StyledCol>
          ))}
        </StyledRow>
      )}
      <StyledButtonContainer>
        {catImages.length > displayedCats && !loading && (
          <Button onClick={addCats} variant="secondary">
            Show more
          </Button>
        )}
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default CatsGallery;
