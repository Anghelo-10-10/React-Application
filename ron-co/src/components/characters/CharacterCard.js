// components/characters/CharacterCard.jsx
import React from 'react';
import { HOUSE_COLORS } from '../../utils/constants';

const CharacterCard = ({ character }) => {
  const houseColors = HOUSE_COLORS[character.house] || {
    primary: '#4B5563',
    secondary: '#9CA3AF'
  };

  return (
    <div 
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      style={{ borderTop: `4px solid ${houseColors.primary}` }}
    >
      <img
        src={character.image || "/api/placeholder/300/400"}
        alt={character.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl text-white font-bold mb-2">{character.name}</h3>
        <div className="space-y-2 text-gray-300">
          <p>Casa: {character.house || 'Desconocida'}</p>
          <p>Estado: {character.alive ? 'Vivo' : 'Fallecido'}</p>
          <p>
            Rol: {character.hogwartsStudent ? 'Estudiante' : 
                  character.hogwartsStaff ? 'Staff' : 'Otro'}
          </p>
          {character.wand && character.wand.core && (
            <p>Varita: {character.wand.core}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;