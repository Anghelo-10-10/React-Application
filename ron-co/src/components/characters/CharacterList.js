import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  if (!characters.length) {
    return <p className="no-results">No se encontraron personajes</p>;
  }

  return (
    <>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onClick={setSelectedCharacter}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterDetail
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
};

export default CharacterList;