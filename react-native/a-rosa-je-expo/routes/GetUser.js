import axios from 'axios';

// URL du backend
const API_URL = 'http://localhost:3306'; 


// Fonction pour se connecter
export const getUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/connexion`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
