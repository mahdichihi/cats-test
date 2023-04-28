import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Container, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 1rem;
  border-radius: 50px 0px 0px 50px;
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

const SingleCatPage = () => {
  const [catData, setCatData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCatData() {
      if (id) {
        try {
          const response = await axios.get(
            `https://api.thecatapi.com/v1/images/${id}`,
            {
              headers: {
                "x-api-key":
                  "live_ZvPzcpQIu2dU7R8aMO2Z68aVRPXY5oIwKAno3nvBgM6L2MJL8jLEbVqVOTfCG5jz",
              },
            }
          );
          setCatData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchCatData();
  }, [id]);

  return (
    <Container>
      <LinkContainer to={`/`}>
        <StyledButton variant="secondary">Go Back to Home Page</StyledButton>
      </LinkContainer>

      {catData ? (
        <Card style={{ maxWidth: "30rem", margin: "2rem auto 0 " }}>
          <Card.Img variant="top" src={catData.url} alt={`Cat ${catData.id}`} />
          <Card.Body>
            <Card.Text>Breed: {catData.breeds[0].name}</Card.Text>
            <Card.Text>Origin: {catData.breeds[0].origin}</Card.Text>
            <Card.Text>Temperament: {catData.breeds[0].temperament}</Card.Text>
            <Card.Text>Description: {catData.breeds[0].description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <SpinnerContainer>
          <StyledSpinner animation="border" variant="secondary" />
        </SpinnerContainer>
      )}
    </Container>
  );
};

export default SingleCatPage;
