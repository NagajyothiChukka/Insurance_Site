import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Header;
