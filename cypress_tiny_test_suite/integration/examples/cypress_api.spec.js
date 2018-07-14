/// <reference types="Cypress" />

context('Cypress.Commands', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/cypress-api')
  })

  // https://on.cypress.io/custom-commands

  it('.add() - create a custom command', () => {
    Cypress.Commands.add('console', {
      prevSubject: true,
    }, (subject, method) => {
      // the previous subject is automatically received
      // and the commands arguments are shifted

      // allow us to change the console method used
      method = method || 'log'

      // log the subject to the console
      // @ts-ignore TS7017
      // eslint-disable-next-line no-console
      console[method]('The subject is', subject)

      // whatever we return becomes the new subject
      // we don't want to change the subject so
      // we return whatever was passed in
      return subject
    })

    // @ts-ignore TS2339
    // eslint-disable-next-line no-unused-vars
    cy.get('button').console('info').then(($button) => {
      // subject is still $button
    })
  })
})
