import React from 'react';

const InfoRow = ({ label, value }) => (
  <div className="info-row">
    <span className="info-label">{label}:</span>
    <span className="info-value">{value || 'Desconocido'}</span>
  </div>
);

const CharacterDetail = ({ character, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="character-detail">
          <div className="character-image-container">
            <img
              src={character.image || "/api/placeholder/400/600"}
              alt={character.name}
              className="character-detail-image"
            />
          </div>
          <div className="character-info">
            <h2 className="character-name">{character.name}</h2>
            <div className="info-grid">
              <InfoRow label="Casa" value={character.house} />
              <InfoRow label="Sangre" value={character.ancestry} />
              <InfoRow label="Fecha de nacimiento" value={character.dateOfBirth} />
              <InfoRow label="Estado" value={character.alive ? 'Vivo' : 'Fallecido'} />
            </div>
            {character.wand && Object.keys(character.wand).length > 0 && (
              <div className="wand-info">
                <h3>Varita</h3>
                <ul>
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

export default CharacterDetail;