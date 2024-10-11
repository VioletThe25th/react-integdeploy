// src/components/UserList.js

import React from 'react';
import { List, ListItem, ListItemText, Typography, Container, Paper } from '@mui/material';

const UserList = ({ users }) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          Liste des utilisateurs
        </Typography>
        <List>
          {users.map((user, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={`${user.city}, ${user.postalCode}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UserList;
