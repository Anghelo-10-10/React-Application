// components/layout/Header.jsx
import React from 'react';
import { useQuiz } from '../../hooks/useQuiz';

const Header = () => {
  const { startQuiz } = useQuiz();

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <span className="menu-icon">☰</span>
          <h1 className="logo">Harry Potter Explorer</h1>
        </div>
        <button onClick={startQuiz} className="button button-primary">
          ¿A qué casa perteneces?
        </button>
      </div>
    </header>
  );
};

export default Header;
