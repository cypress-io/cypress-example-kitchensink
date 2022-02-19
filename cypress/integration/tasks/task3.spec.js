/// <reference types="cypress" />

// Second task - mock a response and fix

// You're going to test this endpoint

// Please investigate and fix the test which verifies whether that the proper message is displayed upon receiving error
// tip: reverse engineer it

describe('Third cypress task', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Update a comment', () => {
    const message = 'Comment updated!'

    cy.get('[data-testid="update-comment-button"]').click()
    cy.get('.network-put-comment').should('contain', message)
  })

  it('Update a comment - error', () => {
    const message = 'whoa, this comment does not exist'

    cy.get('[data-testid="update-comment-button"]').click()
    cy.get('.network-put-comment').should('contain', message)
  })
})
