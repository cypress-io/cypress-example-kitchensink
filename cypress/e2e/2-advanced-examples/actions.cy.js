/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/donkey')
  })

  // eslint-disable-next-line
  it('works', () => {
    cy.get('#outer').should('contain', 'Outer')
    // cy.get('#outer').should('contain', 'Inner')
  })

  // eslint-disable-next-line
  it('does not work', () => {
    cy.get('#outer').should('contain', 'Outer2')
    // cy.get('#outer').should('contain', 'Inner2')
  })

  // eslint-disable-next-line
  it('talks to an iframe', () => {
    cy.get('#example-tier-1')
      .its('0.contentDocument.body')
      .should('contain', "I'm Tier 1 - h3")
  })

  it('talks to the waffles', () => {
    cy.visit('http://localhost:8080/commands/donkey-content')

    cy.get('#example-tier-1')
      .its('0.contentDocument.body')
      .should('contain', "I'm Tier 1 - h3")
  })
})
