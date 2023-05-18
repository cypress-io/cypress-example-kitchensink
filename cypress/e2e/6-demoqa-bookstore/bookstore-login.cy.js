/// <reference types="cypress" />

describe('Bookstore Login', () => {
  // Successfully login
  // Login with invalid data
  // Login with no user
  // Login with no password

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

  it('Cannot login with invalid data', () => {
    cy.bookstoreLogin('incorrectUser', '__7$');
    cy.get('#name').should('have.text', 'Invalid username or password!'); 
  })

  it('Cannot login without providing a username', () => {
    cy.bookstoreLogin(' ', '__7$'); 
    cy.get('#userName').should('have.css', 'border-color', '220, 53, 69'); 
    cy.get('#name').should('have.text', 'Invalid username or password!'); 
  })

  it('Cannot login without providing a password', () => {
    cy.bookstoreLogin(Cypress.env('bookStoreUser'), ' '); 
    cy.get('#name').should('have.text', 'Invalid username or password!'); 
  })
})