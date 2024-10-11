import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from "../components/UserList"

describe('UserList Component', () => {
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

    test('n\'affiche rien si la liste est vide', () => {
        render(<UserList users={[]} />);
        
        // Vérifier qu'aucun utilisateur n'est affiché
        expect(screen.getByText(/Liste des utilisateurs/i)).toBeInTheDocument(); // Vérifie que le titre est toujours présent
        expect(screen.queryByText(/Zack Fair/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Jean Dupont/)).not.toBeInTheDocument();
    });
});
