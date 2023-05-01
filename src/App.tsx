import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import SingleCatPage from "./pages/SingleCatPage";
import Layout from "./components/layout/Layout";
import React from "react";

const StyledApp = styled.div`
  margin-top: 5rem;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cat-details/:id" element={<SingleCatPage />} />
        </Routes>
      </Layout>
    </StyledApp>
  );
};

export default App;
