// src/components/UserList.js

import React from 'react';
import { List, ListItem, ListItemText, Typography, Container, Paper } from '@mui/material';

/**
 * UserList component displays a list of users with their personal details.
 * 
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.users - An array of user objects to be displayed.
 * @param {string} props.users[].firstName - The user's first name.
 * @param {string} props.users[].lastName - The user's last name.
 * @param {string} props.users[].city - The user's city.
 * @param {string} props.users[].postalCode - The user's postal code.
 * @returns {JSX.Element} A styled list of users with their first name, last name, city, and postal code.
 */
const UserList = ({ users }) => {
  const userCount = users.length; // Calculate the number of users
  
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 2 }}>
        {/* Display the total number of registered users */}
        <Typography variant="h5" gutterBottom align="center">
          {userCount} user(s) already registered
        </Typography>

        {/* Display the list of users */}
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
