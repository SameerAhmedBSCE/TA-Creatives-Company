import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Servicespage from './pages/Servicespage';
import PortfolioPage from './pages/PortfolioPage';
import ReviewsPage from './pages/ReviewsPage';
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
