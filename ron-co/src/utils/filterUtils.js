// utils/filterUtils.js
/**
 * Aplica filtros a una lista de personajes
 * @param {Array} characters - Lista de personajes
 * @param {Object} filters - Objeto con los filtros a aplicar
 * @returns {Array} Lista de personajes filtrada
 */
export const applyFilters = (characters, filters) => {
    return characters.filter(character => {
      const matchesSearch = !filters.searchQuery || 
        character.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
  
      const matchesHouse = !filters.house || 
        character.house === filters.house;
  
      const matchesAlive = filters.isAlive === null || 
        character.alive === filters.isAlive;
  
      const matchesRole = !filters.role || filters.role === 'all' || 
        (filters.role === 'student' && character.hogwartsStudent) ||
        (filters.role === 'staff' && character.hogwartsStaff);
  
      return matchesSearch && matchesHouse && matchesAlive && matchesRole;
    });
  };
  
  /**
   * Ordena personajes por diferentes criterios
   * @param {Array} characters - Lista de personajes
   * @param {string} sortBy - Criterio de ordenamiento
   * @returns {Array} Lista ordenada de personajes
   */
  export const sortCharacters = (characters, sortBy) => {
    const sortFunctions = {
      name: (a, b) => a.name.localeCompare(b.name),
      house: (a, b) => (a.house || '').localeCompare(b.house || ''),
      ancestry: (a, b) => (a.ancestry || '').localeCompare(b.ancestry || '')
    };
  
    return [...characters].sort(sortFunctions[sortBy] || sortFunctions.name);
  };
  
  /**
   * Agrupa personajes por casa
   * @param {Array} characters - Lista de personajes
   * @returns {Object} Personajes agrupados por casa
   */
  export const groupByHouse = (characters) => {
    return characters.reduce((groups, character) => {
      const house = character.house || 'Sin Casa';
      if (!groups[house]) {
        groups[house] = [];
      }
      groups[house].push(character);
      return groups;
    }, {});
  };