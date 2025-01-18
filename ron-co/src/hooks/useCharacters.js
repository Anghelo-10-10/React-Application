// hooks/useCharacters.js
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api';

export const useCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setAllCharacters(data);
      } catch (err) {
        setError('Error al cargar los personajes');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  const characters = allCharacters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesHouse = !selectedHouse || character.house === selectedHouse;
    return matchesSearch && matchesHouse;
  });

  return {
    characters,
    loading,
    error,
    searchQuery,
    selectedHouse,
    setSearchQuery,
    setSelectedHouse
  };
};