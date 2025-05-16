// File: src/pages/LandingPage/InsuranceGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const InsuranceGrid = () => {
  const types = ['Health', 'Life', 'Auto', 'Home', 'Travel'];
  return (
    <section className="insurance-grid">
      <h2>Insurance Types</h2>
      <div className="grid">
        {types.map((type) => (
          <Link key={type} to={`/${type.toLowerCase()}`}>{type} Insurance</Link>
        ))}
      </div>
    </section>
  );
};

export default InsuranceGrid;
