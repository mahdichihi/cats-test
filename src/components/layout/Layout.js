import React from "react";
import { Image, Navbar } from "react-bootstrap";
import styled from "styled-components";
import catImage from "../../assets/cat.png";

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  background-color: rgb(255 191 0);
  box-shadow: 0px 0px 8px 0px #9a9a9a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled(Image)`
  width: 7rem;
  border-radius: 36%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledNavbar>
        <StyledImage src={catImage} />
      </StyledNavbar>
      <main style={{ paddingTop: "70px", paddingBottom: "20px" }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
