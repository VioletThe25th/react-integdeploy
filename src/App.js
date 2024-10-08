import './App.css';
import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]); // Add a new user in the list
  }

  return (
    <div>
      <h1>Inscription</h1>
      <RegisterForm onRegister={handleRegister} />
      <h2>Liste des inscrits</h2>
      <UserList users={users}/>
    </div>
  );
}

export default App;