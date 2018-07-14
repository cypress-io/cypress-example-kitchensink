/// <reference types="Cypress" />

context('Files', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/files')
  })

  it('cy.readFile() - read a files contents', () => {
    // https://on.cypress.io/readfile

    // You can read a file and yield its contents
    // The filePath is relative to your project's root.
    cy.readFile('cypress.json').then((json) => {
      expect(json).to.be.an('object')
    })
  })

})
