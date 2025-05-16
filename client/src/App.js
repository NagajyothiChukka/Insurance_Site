// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import Auto from './pages/Insurance/Auto';
import Health from './pages/Insurance/Health';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
