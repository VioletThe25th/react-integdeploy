// src/components/UserList.js

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiMaterial = require('@mui/material');

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
var UserList = function UserList(_ref) {
  var users = _ref.users;

  return _react2['default'].createElement(
    _muiMaterial.Container,
    { maxWidth: 'sm' },
    _react2['default'].createElement(
      _muiMaterial.Paper,
      { elevation: 3, sx: { padding: 2 } },
      _react2['default'].createElement(
        _muiMaterial.Typography,
        { variant: 'h5', gutterBottom: true, align: 'center' },
        'Liste des utilisateurs'
      ),
      _react2['default'].createElement(
        _muiMaterial.List,
        null,
        users.map(function (user, index) {
          return _react2['default'].createElement(
            _muiMaterial.ListItem,
            { key: index, divider: true },
            _react2['default'].createElement(_muiMaterial.ListItemText, {
              primary: user.firstName + ' ' + user.lastName,
              secondary: user.city + ', ' + user.postalCode
            })
          );
        })
      )
    )
  );
};

exports['default'] = UserList;
module.exports = exports['default'];