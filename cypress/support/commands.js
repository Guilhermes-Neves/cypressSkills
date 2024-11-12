// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', () => {
    cy.visit('/')

    cy.contains('h2', 'Faça login')
        .should('be.visible')
})

Cypress.Commands.add('doLogin', () => {
    const user = {
        email: 'papito@cyskills.com.br',
        password: 'showtime'
    }
    cy.login(user)
    cy.userLoggedIn()
})

Cypress.Commands.add('login', (user) => {
    if (user.email) {
        cy.get('input[data-cy=email]').type(user.email)
    }

    if (user.password) {
        cy.get('input[data-cy=password]').type(user.password)
    }

    cy.get('button[data-cy=login-button]').click()
})

Cypress.Commands.add('validateErrorMessage', (text) => {
    cy.contains('h4', 'Oops!')
        .next()
        .should('have.text', text)
})

Cypress.Commands.add('userLoggedIn', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('goTo', (route, title) => {
    cy.get(`nav a[href="/${route}"]`)
        .click()

    cy.contains('h2', title)
        .should('be.visible')
})