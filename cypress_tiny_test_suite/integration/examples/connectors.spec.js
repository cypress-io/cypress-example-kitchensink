/// <reference types="Cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/connectors')
  })

  it('.each() - iterate over an array of elements', () => {
    // https://on.cypress.io/each
    cy.get('.connectors-each-ul>li')
      .each(($el, index, $list) => {
        // eslint-disable-next-line no-console
        console.log($el, index, $list)
      })
  })

})
