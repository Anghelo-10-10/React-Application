// components/filters/FilterToggle.jsx
import React from 'react';

const FilterToggle = ({ label, value, onChange }) => {
  return (
    <div className="filter-toggle">
      <span>{label}</span>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${value === true ? 'active' : ''}`}
          onClick={() => onChange(value === true ? null : true)}
        >
          Sí
        </button>
        <button
          className={`toggle-button ${value === false ? 'active' : ''}`}
          onClick={() => onChange(value === false ? null : false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default FilterToggle;