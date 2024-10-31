'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

require('./App.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsRegisterForm = require('./components/RegisterForm');

var _componentsRegisterForm2 = _interopRequireDefault(_componentsRegisterForm);

var _componentsUserList = require('./components/UserList');

var _componentsUserList2 = _interopRequireDefault(_componentsUserList);

var _muiMaterial = require('@mui/material');

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
   * @property {string} dob - La date de naissance de l'utilisateur.
   * @property {string} city - La ville de l'utilisateur.
   * @property {string} postalCode - Le code postal de l'utilisateur.
   */

  var _useState = (0, _react.useState)([]);

  var _useState2 = _slicedToArray(_useState, 2);

  var users = _useState2[0];
  var setUsers = _useState2[1];

  /**
   * Gère l'enregistrement d'un nouvel utilisateur.
   * 
   * @param {User} newUser - Les informations du nouvel utilisateur à ajouter à la liste.
   */
  var handleRegister = function handleRegister(newUser) {
    setUsers([].concat(_toConsumableArray(users), [newUser])); // Ajout d'un nouvel utilisateur à la liste existante
  };

  return _react2['default'].createElement(
    _muiMaterial.Container,
    { maxWidth: 'lg', sx: { marginTop: 4 } },
    _react2['default'].createElement(
      _muiMaterial.Grid,
      { container: true, spacing: 2 },
      _react2['default'].createElement(
        _muiMaterial.Grid,
        { item: true, xs: 12, md: 6 },
        _react2['default'].createElement(_componentsRegisterForm2['default'], { onRegister: handleRegister })
      ),
      _react2['default'].createElement(
        _muiMaterial.Grid,
        { item: true, xs: 12, md: 6 },
        _react2['default'].createElement(_componentsUserList2['default'], { users: users })
      )
    )
  );
}

exports['default'] = App;
module.exports = exports['default'];
// État local pour stocker la liste des utilisateurs
/* Colonne contenant le formulaire d'inscription */ /* Colonne contenant la liste des utilisateurs */