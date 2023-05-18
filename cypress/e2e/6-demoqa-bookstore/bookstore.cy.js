/// <reference types="cypress" />

describe('Bookstore List', () => {
    // The bookstore should have 8 books on 1 page
    // The books can be sorted by author and publisher
    // 
    // 
  
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
  
      cy.get('#item-2').click();
      
      cy.get('#userName-value').should('have.text', Cypress.env('bookStoreUser')); 
    })
  
    
  })