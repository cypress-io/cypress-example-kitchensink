/// <reference types="cypress" />

context('Session Management', () => {
  /**
   * This spec demonstrates cy.session() which can cache and restore browser
   * state (cookies, localStorage, sessionStorage) between tests.
   *
   * A common real-world use case: avoid repeating an expensive login flow.
   */

  beforeEach(() => {
    cy.session('storage-seed', () => {
      cy.visit('http://localhost:8080/commands/session')

      // This button populates storage on the page.
      cy.get('.ls-btn').click()

      // Validate inside the session setup so Cypress knows the session is valid.
      cy.getAllLocalStorage().should((storageMap) => {
        expect(storageMap).to.have.property('http://localhost:8080')
        expect(storageMap['http://localhost:8080']).to.include({
          prop1: 'red',
          prop2: 'blue',
          prop3: 'magenta',
        })
      })
    })
  })

  it('restores localStorage without re-running the setup steps', () => {
    cy.visit('http://localhost:8080/commands/session')

    // Without cy.session, localStorage is cleared between tests.
    // With cy.session, these values are restored.
    cy.getAllLocalStorage().should((storageMap) => {
      expect(storageMap['http://localhost:8080']).to.include({
        prop1: 'red',
        prop2: 'blue',
        prop3: 'magenta',
      })
    })
  })
})
