/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/donkey')
  })

  // eslint-disable-next-line
  it.only('works', () => {
    cy.get('#outer').should('contain', 'Outer')
    // cy.get('#outer').should('contain', 'Inner')
  })

  // eslint-disable-next-line
  it.only('does not work', () => {
    cy.get('#outer').should('contain', 'Outer2')
    // cy.get('#outer').should('contain', 'Inner2')
  })
})
