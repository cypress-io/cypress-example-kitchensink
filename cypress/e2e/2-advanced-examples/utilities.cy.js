/// <reference types="cypress" />

context('Utilities', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/utilities')
  })

  it('Cypress._ - call a lodash method', () => {
    // https://on.cypress.io/_
    cy.request('http://localhost:8080/users')
      .then((response) => {
        let ids = Cypress._.chain(response.body).map('id').take(3).value()

        expect(ids).to.deep.eq([1, 2, 3])
      })
  })

  it('Cypress.$ - call a jQuery method', () => {
    // https://on.cypress.io/$
    // Cypress.$(selector) only searches the page when the test runs in the page's origin,
    // so query the page with cy.get
    cy.get('.utility-jquery li').first().should('not.have.class', 'active')
    cy.get('.utility-jquery li').first().click()
    cy.get('.utility-jquery li').first().should('have.class', 'active')
  })

  it('Cypress.Blob - blob utilities and base64 string conversion', () => {
    // https://on.cypress.io/blob
    // read the image as base64 here, since the page may be on another origin than the test
    cy.request({ url: '/assets/img/javascript-logo.png', encoding: 'base64' })
    .then(({ body }) => {
      // https://github.com/nolanlawson/blob-util#base64StringToBlob
      // turn the base64 string into a Blob, then into a dataUrl string
      const blob = Cypress.Blob.base64StringToBlob(body, 'image/png')

      return Cypress.Blob.blobToDataURL(blob)
    })
    .then((dataUrl) => {
      // append an <img> element with the dataUrl as its src
      cy.get('.utility-blob').invoke('append', `<img src="${dataUrl}" />`)

      cy.get('.utility-blob img').click()
      cy.get('.utility-blob img').should('have.attr', 'src', dataUrl)
    })
  })

  it('Cypress.minimatch - test out glob patterns against strings', () => {
    // https://on.cypress.io/minimatch
    let matching = Cypress.minimatch('/users/1/comments', '/users/*/comments', {
      matchBase: true,
    })

    expect(matching, 'matching wildcard').to.be.true

    matching = Cypress.minimatch('/users/1/comments/2', '/users/*/comments', {
      matchBase: true,
    })

    expect(matching, 'comments').to.be.false

    // ** matches against all downstream path segments
    matching = Cypress.minimatch('/foo/bar/baz/123/quux?a=b&c=2', '/foo/**', {
      matchBase: true,
    })

    expect(matching, 'comments').to.be.true

    // whereas * matches only the next path segment

    matching = Cypress.minimatch('/foo/bar/baz/123/quux?a=b&c=2', '/foo/*', {
      matchBase: false,
    })

    expect(matching, 'comments').to.be.false
  })

  it('Cypress.Promise - instantiate a bluebird promise', () => {
    // https://on.cypress.io/promise
    let waited = false

    /**
     * @return Bluebird<string>
     */
    function waitOneSecond () {
      // return a promise that resolves after 1 second
      // eslint-disable-next-line no-unused-vars
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          // set waited to true
          waited = true

          // resolve with 'foo' string
          resolve('foo')
        }, 1000)
      })
    }

    cy.then(() => {
      // return a promise to cy.then() that
      // is awaited until it resolves
      return waitOneSecond().then((str) => {
        expect(str).to.eq('foo')
        expect(waited).to.be.true
      })
    })
  })
})
