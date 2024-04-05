// Feature: Landing Page Navigation
describe('Landing Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Displays the landing page correctly', () => {
    cy.title().should('include', 'Cypress.io: Kitchen Sink')
    cy.get('nav.navbar').should('be.visible')
    cy.get('.banner').should('be.visible')
    .and('contain', 'an example app used to showcase Cypress.io testing')
  })
})

// Feature: Navigation Bar Interaction
describe('Navigation Bar Interaction', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Navigates the Commands link', () => {
    cy.get('nav').contains('Commands').click()
    cy.get('.dropdown-menu').should('be.visible')
    .and('contain', 'Querying')
    .and('contain', 'Traversal')
    .and('contain', 'Actions')
  })

  it('Navigates the Utilities link', () => {
    cy.get('nav').contains('Utilities').click()
    cy.url().should('include', '/utilities')
  })

  it('Navigates the Cypress API link', () => {
    cy.get('nav').contains('Cypress API').click()
    cy.url().should('include', '/cypress-api')
  })
})

// Feature: Landing Page Content
describe('Landing Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Viewing the Introduction banner', () => {
    cy.get('.banner').should('be.visible')
        .and('contain', 'Kitchen Sink')
        .find('a').should('have.attr', 'href').and('include', 'https://www.cypress.io')
  })

  it('Exploring Commands section', () => {
    cy.get('.banner-alt').should('contain.text', 'Commands');
    cy.get('.home-list').should('contain.text', 'Querying');
    cy.get('.home-list').should('contain.text', 'Actions');
    cy.get('.home-list').should('contain.text', 'Assertions');
    cy.get('.home-list').should('contain.text', 'get');
    cy.get('.home-list').should('contain.text', 'type');
    cy.get('.home-list').should('contain.text', 'should');
    cy.get('.home-list').contains('Querying').click();
    cy.url().should('include', '/querying')
  })
})

// Feature: External Links and Resources
describe('External Links and Resources', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Accessing the GitHub repository', () => {
    cy.get('nav').contains('GitHub').should('have.attr', 'href', 'https://github.com/cypress-io/cypress-example-kitchensink')
  })

  it('Accessing the Cypress homepage', () => {
    cy.get('nav').contains('cypress.io').should('have.attr', 'href', 'https://www.cypress.io/')
  })
})