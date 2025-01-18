const BASE_URL = 'https://hp-api.herokuapp.com/api';

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching characters');
  }
};

export const fetchCharactersByHouse = async (house) => {
  try {
    const response = await fetch(`${BASE_URL}/characters/house/${house}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching characters from ${house}`);
  }
};