describe('Home page spec', () => {
    it('deployed react app to localhost', () => {
        cy.visit('http://locqlhost.3000')
        cy.contains('1 user(s) already registered')
    })
})