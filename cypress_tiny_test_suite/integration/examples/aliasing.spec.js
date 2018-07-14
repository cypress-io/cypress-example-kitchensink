/// <reference types="Cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/aliasing')
  })

  it('.as() - alias a route for later use', () => {

    // Alias the route to wait for its response
    cy.server()
    cy.route('GET', 'comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('status').should('eq', 200)

  })
})
