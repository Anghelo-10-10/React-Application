// components/characters/CharacterList.jsx
import React from 'react';
import CharacterCard from './CharacterCard';
import { useFilters } from '../../hooks/useFilters';

const CharacterList = ({ characters }) => {
  const { filteredCharacters } = useFilters(characters);

  if (!filteredCharacters.length) {
    return (
      <div className="text-center text-white py-8">
        No se encontraron personajes con los filtros actuales.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;