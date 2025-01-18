// App.jsx
import React from 'react';
import './styles/index.css';

// Import components
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import CharacterList from './components/characters/CharacterList';
import HouseQuiz from './components/quiz/HouseQuiz';

// Import context and hooks
import { FilterProvider } from './context/FilterContext';
import { useCharacters } from './hooks/useCharacters';

const App = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }

  return (
    <FilterProvider>
      <div className="main-layout">
        <Header />
        <div className="container">
          <div className="grid">
            <aside className="sidebar">
              <Sidebar />
            </aside>
            <main>
              <CharacterList characters={characters} />
            </main>
          </div>
        </div>
        <HouseQuiz />
      </div>
    </FilterProvider>
  );
};

export default App;