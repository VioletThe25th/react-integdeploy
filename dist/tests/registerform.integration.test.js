'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testingLibraryReact = require('@testing-library/react');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

// Importation du composant principal

var _componentsRegisterForm = require('../components/RegisterForm');

var _componentsRegisterForm2 = _interopRequireDefault(_componentsRegisterForm);

var _reactToastify = require('react-toastify');

jest.mock('react-toastify', function () {
    return {
        toast: {
            success: jest.fn() }
    };
});

/**
 * Suite de tests d'intégration pour l'enregistrement des utilisateurs et la liste des utilisateurs.
 */
// Mock de toast.success
describe('Tests d\'intégration - Enregistrement et liste des utilisateurs', function () {

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si un champ du formulaire est absent.
     */
    test('Vérifier que le bouton "Enregistrer" est désactivé si un champ est absent', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        // Sélectionne les champs du formulaire
        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur avec un champ prénom vide
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: '' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        // Vérifie que le bouton "Enregistrer" est désactivé
        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si le prénom est incorrect.
     */
    test('Vérifier que le bouton "Enregistrer" est désactivé si le prenom n\'est pas bon', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur avec un prénom incorrect
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: '4534@gjkr' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si le nom de famille est incorrect.
     */
    test('Vérifier que le bouton "Enregistrer" est désactivé si le nom n\'est pas bon', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur avec un nom de famille incorrect
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: '458@wejro' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si l'utilisateur a moins de 18 ans.
     */
    test('Verifie que le bouton "Enregistrer" est absent si l\'utilisateur a moins de 18 ans', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur mineur
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2010-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si le code postal est incorrect.
     */
    test('Verifie que le bouton "Enregistrer" est absent si le code postal n\'est pas francais', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur avec un code postal incorrect
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '750' } });

        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que le bouton "Enregistrer" est désactivé si l'email est incorrect.
     */
    test('Verifie que le bouton "Enregistrer" est absent si l\'adresse email n\'est pas bonne', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_App2['default'], null));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur avec un email incorrect
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        expect(submitButton).toBeDisabled();
    });

    /**
     * Vérifie que les données sont enregistrées correctement et que `toast.success` est appelé après la soumission réussie.
     */
    test('Vérifier que les donnees sont enregistres et que toast.success est appelé', function () {
        var mockOnRegister = jest.fn(); // Mock de la fonction onRegister

        (0, _testingLibraryReact.render)(_react2['default'].createElement(_componentsRegisterForm2['default'], { onRegister: mockOnRegister }));

        var firstNameInput = _testingLibraryReact.screen.getByPlaceholderText(/First name/i);
        var lastNameInput = _testingLibraryReact.screen.getByPlaceholderText(/Last name/i);
        var emailInput = _testingLibraryReact.screen.getByPlaceholderText(/Email/i);
        var dobInput = _testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i);
        var cityInput = _testingLibraryReact.screen.getByPlaceholderText(/City/i);
        var postalCodeInput = _testingLibraryReact.screen.getByPlaceholderText(/Postal code/i);
        var submitButton = _testingLibraryReact.screen.getByText(/Enregistrer/i);

        // Simule une entrée utilisateur valide
        _testingLibraryReact.fireEvent.change(firstNameInput, { target: { value: 'Zack' } });
        _testingLibraryReact.fireEvent.change(lastNameInput, { target: { value: 'Fair' } });
        _testingLibraryReact.fireEvent.change(emailInput, { target: { value: 'zackfair@gmail.com' } });
        _testingLibraryReact.fireEvent.change(dobInput, { target: { value: '2000-01-01' } });
        _testingLibraryReact.fireEvent.change(cityInput, { target: { value: 'Paris' } });
        _testingLibraryReact.fireEvent.change(postalCodeInput, { target: { value: '75000' } });

        expect(submitButton).toBeEnabled();

        // Soumettre le formulaire
        _testingLibraryReact.fireEvent.click(submitButton);

        // Vérifie que la fonction onRegister est appelée avec les bonnes données
        expect(mockOnRegister).toHaveBeenCalledWith({
            firstName: "Zack",
            lastName: "Fair",
            email: "zackfair@gmail.com",
            dob: "2000-01-01",
            city: "Paris",
            postalCode: "75000"
        });

        // Vérifie que toast.success est appelé
        expect(_reactToastify.toast.success).toHaveBeenCalledWith('Inscription réussie');

        // Vérifie que le formulaire est réinitialisé après l'enregistrement
        expect(firstNameInput.value).toBe('');
        expect(lastNameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(dobInput.value).toBe('');
        expect(cityInput.value).toBe('');
        expect(postalCodeInput.value).toBe('');
    });
});