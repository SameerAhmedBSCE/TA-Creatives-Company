import React from "react";
import { Portfolio } from "../components/Portfolio"; // Adjust the import path as needed
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";

const PortfolioPage = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Portfolio</title>
          <meta name="description" content="A collection of my projects." />
        </Helmet>
        <h1 className="display-4 mb-4 text-center">My Portfolio</h1>
        <Portfolio />
      </Container>
    </HelmetProvider>
  );
};

export default PortfolioPage;
