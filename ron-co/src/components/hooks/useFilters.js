// hooks/useFilters.js
import { useState, useCallback, useMemo } from 'react';

/**
 * Hook personalizado para manejar los filtros de personajes
 * @param {Array} characters - Array de personajes a filtrar
 * @returns {Object} Objeto con los filtros y funciones para manejarlos
 */
export const useFilters = (characters = []) => {
  // Estado para los diferentes filtros
  const [filters, setFilters] = useState({
    house: '',
    searchQuery: '',
    isStudent: null,
    isAlive: null,
    role: 'all' // 'all', 'student', 'staff'
  });

  // Función para actualizar filtros individuales
  const updateFilter = useCallback((filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  }, []);

  // Función para resetear todos los filtros
  const resetFilters = useCallback(() => {
    setFilters({
      house: '',
      searchQuery: '',
      isStudent: null,
      isAlive: null,
      role: 'all'
    });
  }, []);

  // Aplicar los filtros a la lista de personajes
  const filteredCharacters = useMemo(() => {
    return characters.filter(character => {
      // Filtro por búsqueda
      const matchesSearch = filters.searchQuery === '' || 
        character.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

      // Filtro por casa
      const matchesHouse = filters.house === '' || 
        character.house === filters.house;

      // Filtro por estado (vivo/muerto)
      const matchesAlive = filters.isAlive === null || 
        character.alive === filters.isAlive;

      // Filtro por rol
      let matchesRole = true;
      if (filters.role === 'student') {
        matchesRole = character.hogwartsStudent;
      } else if (filters.role === 'staff') {
        matchesRole = character.hogwartsStaff;
      }

      return matchesSearch && matchesHouse && matchesAlive && matchesRole;
    });
  }, [characters, filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredCharacters,
    totalResults: filteredCharacters.length
  };
};