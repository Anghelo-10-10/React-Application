import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">POTTER???</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
