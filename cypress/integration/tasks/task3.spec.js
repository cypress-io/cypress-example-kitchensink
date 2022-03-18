/// <reference types="cypress" />

// Third task - mock a response and fix

// You're going to test endpoint responsible for updating comments

// Please investigate and fix the test which verifies whether that the proper message is displayed upon receiving error
// tip: reverse engineer it

describe('Third cypress task', () => {
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/')
  })

  it('Update a comment', () => {
    const message = 'Comment updated!'

    cy.get('div[id="network-requests"]').find('button').last().click()
    cy.get('.network-put-comment').should('contain', message)
  })

  it('Update a comment - error', () => {
    const message = 'whoa, this comment does not exist'

    cy.intercept(
      {
        method: 'PUT',
        url: '**/comments/*',
      },
      {
        statusCode: 404,
        body: { error: message },
      }).as('putComment')

    cy.get('div[id="network-requests"]').find('button').last().click()

    cy.wait('@putComment')
    cy.get('.network-put-comment').should('contain', message)
  })
})
