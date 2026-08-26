/// <reference types="cypress" />

context('Misc', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/misc')
  })

  it('cy.task() - run code in Node', () => {
    // run code in the Node process that loads your Cypress
    // configuration, so you can take actions necessary for
    // your test outside the scope of Cypress.
    // https://on.cypress.io/task

    // a task can return any serializable value back to the browser
    cy.task('echo', 'Jane Lane').should('contain', 'Jane Lane')

    // tasks run in Node, so they can use any Node API,
    // such as reading a file off disk
    cy.task('readConfigFile').should('contain', 'projectId')

    // we can use Cypress.platform string to
    // select appropriate behavior
    // https://on.cypress/io/platform
    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)

    // tasks run on the same machine Cypress.platform describes
    cy.task('osInfo').should('deep.equal', {
      platform: Cypress.platform,
      arch: Cypress.arch,
    })
  })

  it('cy.focused() - get the DOM element that has focus', () => {
    // https://on.cypress.io/focused
    cy.get('.misc-form').find('#name').click()
    cy.focused().should('have.id', 'name')

    cy.get('.misc-form').find('#description').click()
    cy.focused().should('have.id', 'description')
  })

  context('Cypress.Screenshot', function () {
    it('cy.screenshot() - take a screenshot', () => {
      // https://on.cypress.io/screenshot
      cy.screenshot('my-image')
    })

    it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot () { },
        onAfterScreenshot () { },
      })
    })
  })

  it('cy.wrap() - wrap an object', () => {
    // https://on.cypress.io/wrap
    cy.wrap({ foo: 'bar' })
      .should('have.property', 'foo')
      .and('include', 'bar')
  })
})
