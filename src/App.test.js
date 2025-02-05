import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';

import {getAllUsers, createUser} from './services/api'; // Import des fonctions API

jest.mock('./services/api', () => ({
  getAllUsers: jest.fn(),
  createUser: jest.fn(),
}));


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Inscription/i);
  expect(linkElement).toBeInTheDocument();
});

test.skip('Verifie la presence de la liste des utilisateurs', () => {
  render(<App />);
  const linkElement = screen.getByText(/Liste des utilisateurs/i);
  expect(linkElement).toBeInTheDocument();
});

test('ajoute un nouvel utilisateur à la liste', async() => {
  render(<App />);
  createUser.mockImplementationOnce(() => Promise.resolve(
      {
        firstName: 'Zack',
        lastName: 'Fair',
        email: 'zack.fair@gmail.com',
        birthday: '2000-01-01T00:00:00.000+00:00',
        city: 'Paris',
        postalCode: '75000'
      }
  ))
  getAllUsers.mockImplementationOnce(() => Promise.resolve([
      {
        firstName: 'Zack',
        lastName: 'Fair',
        email: 'zack.fair@gmail.com',
        birthday: '2000-01-01T00:00:00.000+00:00',
        city: 'Paris',
        postalCode: '75000'
      }
      ]))

  // Remplir le formulaire avec des données valides
  fireEvent.change(screen.getByPlaceholderText(/First name/i), { target: { value: 'Zack' } });
  fireEvent.change(screen.getByPlaceholderText(/Last name/i), { target: { value: 'Fair' } });
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'zack.fair@gmail.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Birthday/i), { target: { value: '2000-01-01' } });
  fireEvent.change(screen.getByPlaceholderText(/City/i), { target: { value: 'Paris' } });
  fireEvent.change(screen.getByPlaceholderText(/Postal code/i), { target: { value: '75000' } });

  // Soumettre le formulaire
  fireEvent.click(screen.getByRole('button', { name: /Enregistrer/i }));

  // Vérifie que le nouvel utilisateur est affiché dans la liste
  await waitFor(() => {
      expect(screen.getByText(/Zack Fair/i)).toBeInTheDocument();
      expect(screen.getByText(/Paris/i)).toBeInTheDocument();
      expect(screen.getByText(/75000/i)).toBeInTheDocument();
  });

});