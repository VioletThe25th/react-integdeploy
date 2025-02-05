import './App.css';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import { Grid, Container } from '@mui/material';
import { getAllUsers, createUser } from './services/api'; // Import des fonctions API


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

  let [users, setUsers] = useState([]);

  // Charger les utilisateurs depuis le backend
  const fetchUsers = useCallback(async () => {
    try {
      const users = await getAllUsers();
      setUsers(users); // Met à jour l'état avec les utilisateurs récupérés
    } catch (error) {
      console.error(`Erreur lors du chargement des utilisateurs : `, error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleRegister = async (newUser) => {
    try {
      await createUser(newUser); // Envoie l'utilisateur au backend
      fetchUsers(); // Recharger les utilisateurs
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
