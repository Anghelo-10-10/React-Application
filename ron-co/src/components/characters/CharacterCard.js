import React from 'react';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(character)}>
      <img
        src={character.image || "/api/placeholder/300/400"}
        alt={character.name}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p>Casa: {character.house || 'Desconocida'}</p>
      </div>
    </div>
  );
};

export default CharacterCard;