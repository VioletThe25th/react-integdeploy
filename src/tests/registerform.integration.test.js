import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Importation du composant principal
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(), // Mock de toast.success
  },
}));

describe('Tests d\'intégration - Enregistrement et liste des utilisateurs', () => {

  test('Vérifier que le bouton "Enregistrer" est désactivé si un champ est absent', () => {
    render(<App />);

    // Vérifie que le formulaire d'inscription est présent
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const dobInput = screen.getByPlaceholderText(/Date of birth/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simuler l'entrée d'un utilisateur sans prenom
    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    // Le bouton "Enregistrer" devrait être désactivé
    expect(submitButton).toBeDisabled();
  });

  test('Vérifier que le bouton "Enregistrer" est désactivé si le prenom n\'est pas bon', () => {
    render(<App />);

    // Vérifie que le formulaire d'inscription est présent
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const dobInput = screen.getByPlaceholderText(/Date of birth/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simuler l'entrée d'un utilisateur sans prenom
    fireEvent.change(firstNameInput, { target: { value: '4534@gjkr' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    // Le bouton "Enregistrer" devrait être désactivé
    expect(submitButton).toBeDisabled();
  });

  test('Vérifier que le bouton "Enregistrer" est désactivé si le nom n\'est pas bon', () => {
    render(<App />);

    // Vérifie que le formulaire d'inscription est présent
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const dobInput = screen.getByPlaceholderText(/Date of birth/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simuler l'entrée d'un utilisateur sans prenom
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: '458@wejro' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    // Le bouton "Enregistrer" devrait être désactivé
    expect(submitButton).toBeDisabled();
  });

  test('Verifie aue le bouton "Enregistrer" est absent si l\'utilisateur a moins de 18 ans', () => {
    render(<App />);

    // Vérifie que le formulaire d'inscription est présent
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const dobInput = screen.getByPlaceholderText(/Date of birth/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simuler l'entrée d'un utilisateur mineur
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(dobInput, { target: { value: '2010-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    // Le bouton "Enregistrer" devrait être désactivé
    expect(submitButton).toBeDisabled();
  });

  test('Verifie que le bouton "Enregistrer" est absent si le code postal n\'est pas francais', () => {
    render(<App/>);

      // Vérifie que le formulaire d'inscription est présent
      const firstNameInput = screen.getByPlaceholderText(/First name/i);
      const lastNameInput = screen.getByPlaceholderText(/Last name/i);
      const emailInput = screen.getByPlaceholderText(/Email/i);
      const dobInput = screen.getByPlaceholderText(/Date of birth/i);
      const cityInput = screen.getByPlaceholderText(/City/i);
      const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
      const submitButton = screen.getByText(/Enregistrer/i);

      // Simuler l'entrée d'un utilisateur avec un mauvais code postal
      fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
      fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
      fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
      fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
      fireEvent.change(cityInput, { target: { value: 'Paris' } });
      fireEvent.change(postalCodeInput, { target: { value: '750' } });

      // Le bouton "Enregistrer" devrait être désactivé
      expect(submitButton).toBeDisabled();
    });

  test('Verifie que le bouton "Enregistrer" est absent si l\'adresse email n\'est pas bonne', () => {
    render(<App/>);

      // Vérifie que le formulaire d'inscription est présent
      const firstNameInput = screen.getByPlaceholderText(/First name/i);
      const lastNameInput = screen.getByPlaceholderText(/Last name/i);
      const emailInput = screen.getByPlaceholderText(/Email/i);
      const dobInput = screen.getByPlaceholderText(/Date of birth/i);
      const cityInput = screen.getByPlaceholderText(/City/i);
      const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
      const submitButton = screen.getByText(/Enregistrer/i);

      // Simuler l'entrée d'un utilisateur avec un mauvais code postal
      fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
      fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
      fireEvent.change(emailInput, { target: { value: 'zackfair' } });
      fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
      fireEvent.change(cityInput, { target: { value: 'Paris' } });
      fireEvent.change(postalCodeInput, { target: { value: '75000' } });

      // Le bouton "Enregistrer" devrait être désactivé
      expect(submitButton).toBeDisabled();
    });

  test('Vérifier que les donnees sont enregistres et que toast.success est appelé', () => {
    const mockOnRegister = jest.fn(); // Mock de la fonction onRegister
    
    render(<RegisterForm onRegister={mockOnRegister}/>);

      // Vérifie que le formulaire d'inscription est présent
      const firstNameInput = screen.getByPlaceholderText(/First name/i);
      const lastNameInput = screen.getByPlaceholderText(/Last name/i);
      const emailInput = screen.getByPlaceholderText(/Email/i);
      const dobInput = screen.getByPlaceholderText(/Date of birth/i);
      const cityInput = screen.getByPlaceholderText(/City/i);
      const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
      const submitButton = screen.getByText(/Enregistrer/i);

      // Simuler l'entrée d'un utilisateur avec un mauvais code postal
      fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
      fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
      fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
      fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
      fireEvent.change(cityInput, { target: { value: 'Paris' } });
      fireEvent.change(postalCodeInput, { target: { value: '75000' } });

      // Le bouton "Enregistrer" devrait être activé
      expect(submitButton).toBeEnabled();

      // Soumettre le formulaire
      fireEvent.click(submitButton);      

      // Verifie que la fonction onRegister est appellee avec les bonnes donnees
      expect(mockOnRegister).toHaveBeenCalledWith({
        firstName: "Zack",
        lastName: "Fair",
        email: "zackfair@gmail.com",
        dob: "2000-01-01",
        city: "Paris",
        postalCode: "75000",
      });

      // verifie que toast.success est appele avec le message correct
      expect(toast.success).toHaveBeenCalledWith('Inscription réussie');

      // Verifie que le formulaire est bien reinitialise apres l'enregistrement 
      expect(firstNameInput.value).toBe('');
      expect(lastNameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(dobInput.value).toBe('');
      expect(cityInput.value).toBe('');
      expect(postalCodeInput.value).toBe('');
    });
});
