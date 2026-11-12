/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    cy.location('pathname').should('include', 'navigation')

    cy.go('back')
    cy.location('pathname').should('not.include', 'navigation')

    cy.go('forward')
    cy.location('pathname').should('include', 'navigation')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'navigation')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'navigation')
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain
    // Pass options to the visit
    cy.visit('http://localhost:8080/commands/navigation', {
      timeout: 50000, // increase total time for the visit to resolve
      // these callbacks can run inside the page, where the test's `expect` isn't available
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        if (typeof contentWindow !== 'object') {
          throw new Error('onBeforeLoad did not get the window')
        }
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        if (typeof contentWindow !== 'object') {
          throw new Error('onLoad did not get the window')
        }
      },
    })
  })
})
