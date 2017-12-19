context('Location', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080/commands/location')
  })

  // We look at the url to make assertions
  // about the page's state

  it('cy.hash() - get the current URL hash', function () {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', function () {
    // https://on.cypress.io/location
    cy.location().should(function (location) {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:8080/commands/location')
      expect(location.host).to.eq('localhost:8080')
      expect(location.hostname).to.eq('localhost')
      expect(location.origin).to.eq('http://localhost:8080')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('8080')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', function () {
    // https://on.cypress.io/url
    cy.url().should('eq', 'http://localhost:8080/commands/location')
  })
})
