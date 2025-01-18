// components/layout/Sidebar.jsx
import React from 'react';
import SearchBar from '../filters/SearchBar';
import HouseFilter from '../filters/HouseFilter';
import FilterToggle from '../filters/FilterToggle';
import { useFilters } from '../../hooks/useFilters';

const Sidebar = () => {
  const { filters, updateFilter, resetFilters } = useFilters();

  return (
    <div className="sidebar">
      <SearchBar
        value={filters.searchQuery}
        onChange={(value) => updateFilter('searchQuery', value)}
      />
      <HouseFilter
        value={filters.house}
        onChange={(value) => updateFilter('house', value)}
      />
      <FilterToggle
        label="Estudiantes"
        value={filters.isStudent}
        onChange={(value) => updateFilter('isStudent', value)}
      />
      <FilterToggle
        label="Estado"
        value={filters.isAlive}
        onChange={(value) => updateFilter('isAlive', value)}
      />
      <button onClick={resetFilters} className="button button-secondary">
        Resetear Filtros
      </button>
    </div>
  );
};

export default Sidebar;