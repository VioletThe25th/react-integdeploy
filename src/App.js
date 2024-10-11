import './App.css';
import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import { Grid, Container } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]); // Ajout d'un nouvel utilisateur à la liste
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {/* Colonne du formulaire */}
        <Grid item xs={12} md={6}>
          <RegisterForm onRegister={handleRegister} />
        </Grid>
        
        {/* Colonne de la liste des utilisateurs */}
        <Grid item xs={12} md={6}>
          <UserList users={users} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
