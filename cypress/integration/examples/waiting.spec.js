context('Waiting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/waiting')
  })
  // BE CAREFUL of adding unnecessary wait times.

  // https://on.cypress.io/wait
  it('cy.wait() - wait for a specific amount of time', () => {
    cy.get('.wait-input1').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input2').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    cy.wait(1000)
  })

  // Waiting for a specific resource to resolve
  // is covered within the cy.route() test below
})
