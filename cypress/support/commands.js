Cypress.Commands.add('login', (conta, email, senha) => {
    cy.get('input[name="conta"]').type(conta)
    cy.get('input[name="login"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.contains('button', 'entrar').click();
})

Cypress.Commands.add('login2', (email, senha) => {
    cy.get('input[name="login"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.contains('button', 'entrar').click();
})

Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click()
})







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