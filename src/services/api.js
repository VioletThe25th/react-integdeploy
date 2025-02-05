import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:8000";

// Fonction pour obtenir tous les utilisateurs
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    throw error;
  }
};

// Fonction pour créer un nouvel utilisateur
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${SERVER_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    throw error;
  }
};

// Fonction pour compter les utilisateurs
export const countUsers = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/users`);
      if (response.data && response.data.users) {
        return response.data.users.length;
      }
      throw new Error("Invalid API response");
    } catch (error) {
      console.error("Erreur lors du comptage des utilisateurs :", error);
      throw error;
    }
  };
