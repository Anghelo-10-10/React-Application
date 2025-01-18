// components/filters/HouseFilter.jsx
import React from 'react';
import { HOUSES } from '../../utils/constants';

const HouseFilter = ({ value, onChange }) => {
  return (
    <div className="filter-group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select"
      >
        <option value="">Todas las casas</option>
        {Object.values(HOUSES).map((house) => (
          <option key={house} value={house}>
            {house}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HouseFilter;