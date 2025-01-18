export const fetchCharacters = async () => {
  try {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    if (!response.ok) throw new Error('Error en la respuesta del servidor');
    return await response.json();
  } catch (error) {
    throw new Error('Error al obtener los personajes');
  }
};