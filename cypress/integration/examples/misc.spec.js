
context('Misc', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080/commands/misc')
  })

  it('.end() - end the command chain', function () {
    // cy.end is useful when you want to end a chain of commands
    // and force Cypress to re-query from the root element

    // https://on.cypress.io/end
    cy.get('.misc-table').within(function () {
      // ends the current chain and yields null
      cy.contains('Cheryl').click().end()

      // queries the entire table again
      cy.contains('Charles').click()
    })
  })

  it('cy.exec() - execute a system command', function () {
    // cy.exec allows you to execute a system command.
    // so you can take actions necessary for your test,
    // but outside the scope of Cypress.

    // https://on.cypress.io/exec
    cy.exec('echo Jane Lane')
      .its('stdout').should('contain', 'Jane Lane')

    // we can use Cypress.platform string to
    // select appropriate command
    // https://on.cypress/io/platform
    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)

    if (Cypress.platform === 'win32') {
      cy.exec('print cypress.json')
        .its('stderr').should('be.empty')
    } else {
      cy.exec('cat cypress.json')
          .its('stderr').should('be.empty')

      cy.exec('pwd')
          .its('code').should('eq', 0)
    }
  })

  it('cy.focused() - get the DOM element that has focus', function () {
    // https://on.cypress.io/focused
    cy.get('.misc-form').find('#name').click()
    cy.focused().should('have.id', 'name')

    cy.get('.misc-form').find('#description').click()
    cy.focused().should('have.id', 'description')
  })

  it('cy.screenshot() - take a screenshot', function () {
    // https://on.cypress.io/screenshot
    cy.screenshot('my-image')
  })

  it('cy.wrap() - wrap an object', function () {
    // https://on.cypress.io/wrap
    cy.wrap({ foo: 'bar' })
      .should('have.property', 'foo')
      .and('include', 'bar')
  })
})
