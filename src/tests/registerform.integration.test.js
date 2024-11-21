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

/**
 * Suite de tests d'intégration pour l'enregistrement des utilisateurs et la liste des utilisateurs.
 */
describe('Tests d\'intégration - Enregistrement et liste des utilisateurs', () => {

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si un champ du formulaire est absent.
   */
  test('Vérifier que le bouton "Enregistrer" est désactivé si un champ est absent', () => {
    render(<App />);

    // Sélectionne les champs du formulaire
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const BirthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur avec un champ prénom vide
    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(BirthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    // Vérifie que le bouton "Enregistrer" est désactivé
    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si le prénom est incorrect.
   */
  test('Vérifier que le bouton "Enregistrer" est désactivé si le prenom n\'est pas bon', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur avec un prénom incorrect
    fireEvent.change(firstNameInput, { target: { value: '4534@gjkr' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si le nom de famille est incorrect.
   */
  test('Vérifier que le bouton "Enregistrer" est désactivé si le nom n\'est pas bon', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur avec un nom de famille incorrect
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: '458@wejro' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si l'utilisateur a moins de 18 ans.
   */
  test('Verifie que le bouton "Enregistrer" est absent si l\'utilisateur a moins de 18 ans', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur mineur
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(birthdayInput, { target: { value: '2010-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si le code postal est incorrect.
   */
  test('Verifie que le bouton "Enregistrer" est absent si le code postal n\'est pas francais', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur avec un code postal incorrect
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '750' } });

    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que le bouton "Enregistrer" est désactivé si l'email est incorrect.
   */
  test('Verifie que le bouton "Enregistrer" est absent si l\'adresse email n\'est pas bonne', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur avec un email incorrect
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair' } });
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    expect(submitButton).toBeDisabled();
  });

  /**
   * Vérifie que les données sont enregistrées correctement et que `toast.success` est appelé après la soumission réussie.
   */
  test('Vérifier que les donnees sont enregistres et que toast.success est appelé', () => {
    const mockOnRegister = jest.fn(); // Mock de la fonction onRegister
    
    render(<RegisterForm onRegister={mockOnRegister}/>);

    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const birthdayInput = screen.getByPlaceholderText(/Birthday/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const postalCodeInput = screen.getByPlaceholderText(/Postal code/i);
    const submitButton = screen.getByText(/Enregistrer/i);

    // Simule une entrée utilisateur valide
    fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
    fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
    fireEvent.change(birthdayInput, { target: { value: '2000-01-01' } });
    fireEvent.change(cityInput, { target: { value: 'Paris' } });
    fireEvent.change(postalCodeInput, { target: { value: '75000' } });

    expect(submitButton).toBeEnabled();

    // Soumettre le formulaire
    fireEvent.click(submitButton);

    // Vérifie que la fonction onRegister est appelée avec les bonnes données
    expect(mockOnRegister).toHaveBeenCalledWith({
      firstName: "Zack",
      lastName: "Fair",
      email: "zackfair@gmail.com",
      birthday: "2000-01-01",
      city: "Paris",
      postalCode: "75000",
    });

    // Vérifie que toast.success est appelé
    expect(toast.success).toHaveBeenCalledWith('Inscription réussie');

    // Vérifie que le formulaire est réinitialisé après l'enregistrement
    expect(firstNameInput.value).toBe('');
    expect(lastNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(birthdayInput.value).toBe('');
    expect(cityInput.value).toBe('');
    expect(postalCodeInput.value).toBe('');
  });
});
