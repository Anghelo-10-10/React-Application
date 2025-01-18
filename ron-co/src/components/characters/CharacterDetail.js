// components/characters/CharacterDetail.jsx
import React from 'react';
import { HOUSE_COLORS, HOUSE_TRAITS } from '../../utils/constants';

const CharacterDetail = ({ character }) => {
  const houseColors = HOUSE_COLORS[character.house] || {
    primary: '#4B5563',
    secondary: '#9CA3AF'
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={character.image || "/api/placeholder/400/600"}
            alt={character.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-white">{character.name}</h2>
          <div className="space-y-2 text-gray-300">
            <InfoRow label="Casa" value={character.house} color={houseColors.primary} />
            <InfoRow label="Sangre" value={character.ancestry} />
            <InfoRow label="Fecha de nacimiento" value={character.dateOfBirth} />
            <InfoRow label="Estado" value={character.alive ? 'Vivo' : 'Fallecido'} />
            {character.wand && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Varita</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Madera: {character.wand.wood || 'Desconocida'}</li>
                  <li>Núcleo: {character.wand.core || 'Desconocido'}</li>
                  <li>Longitud: {character.wand.length || 'Desconocida'}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, color }) => (
  <div className="flex items-center space-x-2">
    <span className="font-semibold">{label}:</span>
    <span style={color ? { color } : undefined}>{value || 'Desconocido'}</span>
  </div>
);

export default CharacterDetail;