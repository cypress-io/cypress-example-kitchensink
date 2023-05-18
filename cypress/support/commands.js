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

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// So unless we pass login values directly from tests (for negative scenarios, for instance), these
// values will be pulled from the env variables file cypress.config.js.

Cypress.Commands.add('bookstoreLogin', (userName, password) => {
  const user = userName ?? Cypress.env('bookStoreUser');
  const pass = password ?? Cypress.env('bookStorePassword');
  cy.get('#userName').type(user);
  cy.get('#password').type(pass);
  cy.get('#login').click();
})