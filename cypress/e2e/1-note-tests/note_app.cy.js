describe('Note app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', () => {
        cy.contains('Notas')
    })

    it('frontpage can be opened', () => {
        cy.contains('lorem ipsum dolor sit amet 3')
    })

    it('login form can be opened', () => {
        cy.contains('Show Login').click()
    })

    it('user can login', () => {
        cy.contains('Show Login').click()
        // cy.get('input').first().type('Usuario')
        // cy.get('input').last().type('12345')
        cy.get('[placeholder="Usuario"]').type('Usuario')
        cy.get('[placeholder="Contraseña"]').type('12345')

        cy.get('#loginButton').click()
    })

    // it('create new note', () => {
    //     cy.contains('Show Login').click()
    //     cy.get('[placeholder="Usuario"]').type('Usuario')
    //     cy.get('[placeholder="Contraseña"]').type('12345')
    //     cy.get('#loginButton').click()

    //     cy.contains('Crear Nota').click()
    //     cy.get('input').type('a note created by cypress')
    //     cy.contains('save').click()
    //     cy.contains('a note created by cypress')
    // })
})