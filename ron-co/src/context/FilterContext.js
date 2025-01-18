import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const FilterContext = createContext();

// Provider Component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    house: '',
    searchQuery: '',
    isStudent: null,
    isAlive: null,
    role: 'all'
  });

  const updateFilter = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      house: '',
      searchQuery: '',
      isStudent: null,
      isAlive: null,
      role: 'all'
    });
  };

  const value = {
    filters,
    updateFilter,
    resetFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext debe usarse dentro de un FilterProvider');
  }
  return context;
};

export default FilterContext;