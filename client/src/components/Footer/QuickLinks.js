// File: src/components/Footer/QuickLinks.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/claim">File a Claim</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
