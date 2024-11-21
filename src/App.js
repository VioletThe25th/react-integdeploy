import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
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
   * @property {string} dob - La date de naissance de l'utilisateur.
   * @property {string} city - La ville de l'utilisateur.
   * @property {string} postalCode - Le code postal de l'utilisateur.
   */

  const port = process.env.REACT_APP_SERVER_PORT;
  let [usersCount, setUsersCount] = useState(0);

  const handleRegister = async (newUser) => {
    try {
      const api = axios.create({
        baseURL: `http://localhost:${port}`
      });
      // Envoi de l'utilisateur au backend
      await api.post(`/users`, newUser);
      // Recharger les users
      const response = await api.get(`/users`);
      setUsersCount(response.data.users.length); // Mise à jour de l'état
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement de l'utilisateur : `, error);
    }
  };

  // /**
  //  * Gère l'enregistrement d'un nouvel utilisateur.
  //  * 
  //  * @param {User} newUser - Les informations du nouvel utilisateur à ajouter à la liste.
  //  */
  // const handleRegister = (newUser) => {
  //   setUsersCount([...usersCount, newUser]); // Ajout d'un nouvel utilisateur à la liste existante
  // };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {/* Colonne contenant le formulaire d'inscription */}
        <Grid item xs={12} md={6}>
          <RegisterForm onRegister={handleRegister} />
        </Grid>
        
        {/* Colonne contenant la liste des utilisateurs */}
        <Grid item xs={12} md={6}>
          <UserList users={usersCount} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
