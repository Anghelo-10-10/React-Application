// utils/quizLogic.js
/**
 * Calcula la casa resultante basada en las respuestas
 * @param {Array} answers - Array de respuestas del quiz
 * @returns {Object} Resultado con casa y estadísticas
 */
export const calculateQuizResult = (answers) => {
    // Contabilizar puntos por casa
    const housePoints = answers.reduce((points, answer) => {
    points[answer] = (points[answer] || 0) + 1;
    return points;
    }, {});

    // Encontrar la casa con más puntos
    const [winningHouse] = Object.entries(housePoints)
    .sort(([,a], [,b]) => b - a);

    // Calcular porcentajes
    const total = answers.length;
    const percentages = Object.entries(housePoints).reduce((acc, [house, points]) => {
      acc[house] = (points / total) * 100;
    return acc;
    }, {});

    return {
    house: winningHouse[0],
    points: housePoints,
    percentages,
    traits: getHouseTraits(winningHouse[0]),
    secondaryHouse: getSecondaryHouse(percentages, winningHouse[0])
    };
};

/**
   * Obtiene los rasgos característicos de una casa
   * @param {string} house - Nombre de la casa
   * @returns {Array} Lista de rasgos característicos
   */
export const getHouseTraits = (house) => {
    return HOUSE_TRAITS[house] || [];
};

/**
   * Determina la casa secundaria basada en los porcentajes
   * @param {Object} percentages - Porcentajes de cada casa
   * @param {string} primaryHouse - Casa principal
   * @returns {string} Casa secundaria
   */
export const getSecondaryHouse = (percentages, primaryHouse) => {
    const sortedHouses = Object.entries(percentages)
    .filter(([house]) => house !== primaryHouse)
    .sort(([,a], [,b]) => b - a);
    
    return sortedHouses[0]?.[0] || null;
};

/**
   * Genera una descripción personalizada basada en el resultado
   * @param {Object} result - Resultado del quiz
   * @returns {string} Descripción personalizada
   */
export const generateQuizDescription = (result) => {
    const { house, secondaryHouse, percentages } = result;
    const primaryTraits = getHouseTraits(house).slice(0, 2);
    const secondaryTraits = secondaryHouse ? 
    getHouseTraits(secondaryHouse).slice(0, 1) : 
    [];

    return `Perteneces a la casa ${house}, donde destacan tus cualidades de 
    ${primaryTraits.join(' y ')}. ${
    secondaryHouse ? 
    `También muestras afinidad con ${secondaryHouse}, 
    especialmente en cuanto a ${secondaryTraits[0]}.` : 
    ''
    }`;
};