context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.location('pathname').should('include', 'navigation')

    // https://on.cypress.io/go
    cy.go('back')
    cy.location('pathname').should('not.include', 'navigation')

    cy.go('forward')
    cy.location('pathname').should('include', 'navigation')

    // equivalent to clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'navigation')

    // equivalent to clicking forward
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
    /* eslint-disable no-unused-vars */
    // Visit any sub-domain of your current domain
    // https://on.cypress.io/visit

    // Pass options to the visit
    cy.visit('http://localhost:8080/commands/navigation', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
      },
    })
    /* eslint-enable no-unused-vars */
  })
})
