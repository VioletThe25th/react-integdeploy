import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import { Grid, Container } from '@mui/material';

/**
 * Composant principal de l'application qui gère l'enregistrement des utilisateurs et leur affichage.
 * 
 * Le composant utilise un état local pour stocker la liste des utilisateurs. 
 * Lorsqu'un utilisateur est enregistré via le formulaire d'inscription, il est ajouté à la liste.
 * 
 * @component
 */
function App() {
  /**
   * @typedef {Object} User
   * @property {string} firstName - Le prénom de l'utilisateur.
   * @property {string} lastName - Le nom de famille de l'utilisateur.
   * @property {string} email - L'adresse e-mail de l'utilisateur.
   * @property {string} birthday - La date de naissance de l'utilisateur.
   * @property {string} city - La ville de l'utilisateur.
   * @property {string} postalCode - Le code postal de l'utilisateur.
   */

  const port = process.env.REACT_APP_SERVER_PORT;
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

    // Charger les utilisateurs depuis le backend
    const fetchUsers = async () => {
      try {
        const api = axios.create({
          baseURL: `http://localhost:${port}`,
        });
        const response = await api.get(`/users`);
        setUsers(response.data.users);
      } catch (error) {
        console.error(`Erreur lors du chargement des utilisateurs : `, error);
      }
    };

  const handleRegister = async (newUser) => {
    try {
      const api = axios.create({
        baseURL: `http://localhost:${port}`
      });
      // Envoi de l'utilisateur au backend
      await api.post(`/users`, newUser);
      // Recharger les users
      fetchUsers();
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement de l'utilisateur : `, error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {/* Colonne contenant le formulaire d'inscription */}
        <Grid item xs={12} md={6}>
          <RegisterForm onRegister={handleRegister} />
        </Grid>
        
        {/* Colonne contenant la liste des utilisateurs */}
        <Grid item xs={12} md={6}>
          <UserList users={users} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
