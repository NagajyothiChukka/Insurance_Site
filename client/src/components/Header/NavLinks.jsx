import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NavLinks = () => {
  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <div className="dropdown">
        <span className="dropbtn">Products ▾</span>
        <div className="dropdown-content">
          <Link to="/health">Health Insurance</Link>
          <Link to="/life">Life Insurance</Link>
          <Link to="/auto">Auto Insurance</Link>
          <Link to="/home-insurance">Home Insurance</Link>
          <Link to="/travel">Travel Insurance</Link>
        </div>
      </div>
      <Link to="/register-login">Register/Login</Link>
    </nav>
  );
};

export default NavLinks;
