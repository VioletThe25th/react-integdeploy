'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _testingLibraryReact = require('@testing-library/react');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

test('renders learn react link', function () {
  (0, _testingLibraryReact.render)(React.createElement(_App2['default'], null));
  var linkElement = _testingLibraryReact.screen.getByText(/Inscription/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verifie la presence de la liste des utilisateurs', function () {
  (0, _testingLibraryReact.render)(React.createElement(_App2['default'], null));
  var linkElement = _testingLibraryReact.screen.getByText(/Liste des utilisateurs/i);
  expect(linkElement).toBeInTheDocument();
});

test('ajoute un nouvel utilisateur à la liste', function () {
  (0, _testingLibraryReact.render)(React.createElement(_App2['default'], null));

  // Remplir le formulaire avec des données valides
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/First name/i), { target: { value: 'Zack' } });
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/Last name/i), { target: { value: 'Fair' } });
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/Email/i), { target: { value: 'zack.fair@gmail.com' } });
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/Date of birth/i), { target: { value: '2000-01-01' } });
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/City/i), { target: { value: 'Paris' } });
  _testingLibraryReact.fireEvent.change(_testingLibraryReact.screen.getByPlaceholderText(/Postal code/i), { target: { value: '75000' } });

  // Soumettre le formulaire
  _testingLibraryReact.fireEvent.click(_testingLibraryReact.screen.getByRole('button', { name: /Enregistrer/i }));

  // Vérifie que le nouvel utilisateur est affiché dans la liste
  expect(_testingLibraryReact.screen.getByText(/Zack Fair/i)).toBeInTheDocument();
  expect(_testingLibraryReact.screen.getByText(/Paris/i)).toBeInTheDocument();
  expect(_testingLibraryReact.screen.getByText(/75000/i)).toBeInTheDocument();
});