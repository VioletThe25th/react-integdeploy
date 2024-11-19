import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from "../components/UserList"

/**
 * Test suite for the UserList component.
 */
describe('UserList Component', () => {

    /**
     * Test that verifies if the UserList component correctly displays a list of users.
     * 
     * This test renders the `UserList` component with a sample array of users and ensures
     * that each user's full name and location are displayed.
     */
    test('affiche la liste des utilisateurs', () => {
        const users = [
            { firstName: 'Zack', lastName: 'Fair', city: 'Paris', postalCode: '75000' },
            { firstName: 'Jean', lastName: 'Dupont', city: 'Lyon', postalCode: '69000' },
        ];

        render(<UserList users={users} />);

        // Vérifier que chaque utilisateur est affiché
        users.forEach(user => {
            expect(screen.getByText(`${user.firstName} ${user.lastName}`)).toBeInTheDocument();
            expect(screen.getByText(`${user.city}, ${user.postalCode}`)).toBeInTheDocument();
        });
    });

    /**
     * Test that verifies the behavior of the UserList component when the user list is empty.
     * 
     * This test renders the `UserList` component with an empty array of users and ensures
     * that no users are displayed but the header is still present.
     */
    test('n\'affiche rien si la liste est vide', () => {
        render(<UserList users={[]} />);
        
        // Vérifier qu'aucun utilisateur n'est affiché
        expect(screen.getByText(/Liste des utilisateurs/i)).toBeInTheDocument(); // Vérifie que le titre est toujours présent
        expect(screen.queryByText(/Zack Fair/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Jean Dupont/)).not.toBeInTheDocument();
    });
});
