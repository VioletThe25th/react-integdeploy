'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testingLibraryReact = require('@testing-library/react');

var _componentsUserList = require("../components/UserList");

var _componentsUserList2 = _interopRequireDefault(_componentsUserList);

/**
 * Test suite for the UserList component.
 */
describe('UserList Component', function () {

    /**
     * Test that verifies if the UserList component correctly displays a list of users.
     * 
     * This test renders the `UserList` component with a sample array of users and ensures
     * that each user's full name and location are displayed.
     */
    test('affiche la liste des utilisateurs', function () {
        var users = [{ firstName: 'Zack', lastName: 'Fair', city: 'Paris', postalCode: '75000' }, { firstName: 'Jean', lastName: 'Dupont', city: 'Lyon', postalCode: '69000' }];

        (0, _testingLibraryReact.render)(_react2['default'].createElement(_componentsUserList2['default'], { users: users }));

        // Vérifier que chaque utilisateur est affiché
        users.forEach(function (user) {
            expect(_testingLibraryReact.screen.getByText(user.firstName + ' ' + user.lastName)).toBeInTheDocument();
            expect(_testingLibraryReact.screen.getByText(user.city + ', ' + user.postalCode)).toBeInTheDocument();
        });
    });

    /**
     * Test that verifies the behavior of the UserList component when the user list is empty.
     * 
     * This test renders the `UserList` component with an empty array of users and ensures
     * that no users are displayed but the header is still present.
     */
    test('n\'affiche rien si la liste est vide', function () {
        (0, _testingLibraryReact.render)(_react2['default'].createElement(_componentsUserList2['default'], { users: [] }));

        // Vérifier qu'aucun utilisateur n'est affiché
        expect(_testingLibraryReact.screen.getByText(/Liste des utilisateurs/i)).toBeInTheDocument(); // Vérifie que le titre est toujours présent
        expect(_testingLibraryReact.screen.queryByText(/Zack Fair/)).not.toBeInTheDocument();
        expect(_testingLibraryReact.screen.queryByText(/Jean Dupont/)).not.toBeInTheDocument();
    });
});