/// <reference types="cypress" />

context('Misc', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/misc')
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

  it('cy.env() - read environment variables', () => {
    // https://on.cypress.io/env

    // cy.env() reads the `env` object in cypress.config.js and CYPRESS_*
    // environment variables, and yields only the keys you ask for, so
    // secrets stay out of the app under test. Values that are not set
    // are left out, so a destructuring default can fill them in.
    cy.env(['apiUrl']).then(({ apiUrl = 'https://jsonplaceholder.cypress.io' }) => {
      expect(apiUrl).to.be.a('string')
    })
  })

  it('cy.task() - run code in Node', () => {
    // https://on.cypress.io/task

    // tasks are registered in setupNodeEvents in cypress.config.js, which
    // also exposes `kitchensinkTasks` to say they exist. A project without
    // them (such as one this spec was scaffolded into) logs how to add them
    if (!Cypress.expose('kitchensinkTasks')) {
      cy.log('Register the nodeVersion and sum tasks in setupNodeEvents to run this example')

      return
    }

    // a task runs in Node, so it can do what the browser cannot
    cy.task('nodeVersion').should('match', /^v\d+/)

    // pass a single argument; the task's return value is yielded
    cy.task('sum', { a: 1, b: 2 }).should('eq', 3)
  })

  it('cy.pause() - pause and step through commands', () => {
    // https://on.cypress.io/pause
    cy.get('.misc-form').find('#name').type('Jane')

    // uncomment cy.pause() to stop the test here in `cypress open` and inspect
    // the app; press Resume or step through the next commands from the
    // Command Log. `cypress run` skips it.
    // cy.pause()

    cy.get('.misc-form').find('#name').should('have.value', 'Jane')
  })
})
