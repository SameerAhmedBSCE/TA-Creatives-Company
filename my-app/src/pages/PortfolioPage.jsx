import React from "react";
import { Portfolio } from "../components/Portfolio"; // Adjust the import path as needed
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";

const PortfolioPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-center">
    <HelmetProvider>
      <Container className="portfolio-page ">
       
        <h1 className="display-4 mb-4 text-center">My Portfolio</h1>
        <Portfolio />
      </Container>
    </HelmetProvider>
    </div>
  );
};

export default PortfolioPage;
