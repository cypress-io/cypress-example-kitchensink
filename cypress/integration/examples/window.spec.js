context('Window', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080/commands/window')
  })

  it('cy.window() - get the global window object', function () {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', function () {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', function () {
    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
  })
})
