/// <reference types="cypress" />

describe('Bookstore Login', () => {
  // Successfully login
  // Login with invalid data
  // Login with no user
  // Login with no password
  // Create new user with password that doesn't fit the criteria
  // Successfully create new user and login

  beforeEach(() => {
    cy.visit('https://demoqa.com/login');
    Cypress.on('uncaught:exception', () => {
      // Log the error or perform any custom handling
      // Returning false prevents Cypress from failing the test
      return false;
    });
  })
  
  it('Can successfully login with valid data', () => {
    cy.bookstoreLogin();

    cy.url().should('include', 'https://demoqa.com/profile');
    // cy.contains('#userName-value', Cypress.env('bookStoreUser')).should('exist');
    // cy.get('#userName-value').contains(Cypress.env('bookStoreUser'));
    cy.get('#userName-value').should('have.text', Cypress.env('bookStoreUser')); 
  })
})