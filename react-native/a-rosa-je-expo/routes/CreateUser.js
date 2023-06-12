import axios from 'axios';

// URL du backend
const API_URL = 'http://localhost:3306';


// Fonction pour créer un compte
export const createUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/creerCompte`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};