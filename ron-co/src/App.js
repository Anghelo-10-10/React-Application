import React from 'react';
import './styles/index.css';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import CharacterList from './components/characters/CharacterList';
import SearchBar from './components/filters/SearchBar';
import HouseFilter from './components/filters/HouseFilter';
import { useCharacters } from './hooks/useCharacters';

const App = () => {
  const { 
    characters, 
    loading, 
    error, 
    searchQuery, 
    selectedHouse, 
    setSearchQuery, 
    setSelectedHouse 
  } = useCharacters();

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <Layout>
      <div className="app-container">
        <Header>
          <div className="filters-container">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <HouseFilter value={selectedHouse} onChange={setSelectedHouse} />
          </div>
        </Header>
        <main className="container">
          <CharacterList characters={characters} />
        </main>
      </div>
    </Layout>
  );
};

export default App;