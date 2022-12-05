/// <reference types="cypress" />

context('Local / Session Storage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/storage')
  })
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('cy.clearLocalStorage() - clear all data in local storage for the current origin', () => {
    // https://on.cypress.io/clearlocalstorage
    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).to.eq('red')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // clearLocalStorage() yields the localStorage object
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.be.null
      expect(ls.getItem('prop3')).to.be.null
    })

    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).to.eq('red')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // Clear key matching string in Local Storage
    cy.clearLocalStorage('prop1').should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.eq('blue')
      expect(ls.getItem('prop3')).to.eq('magenta')
    })

    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).to.eq('red')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // Clear keys matching regex in Local Storage
    cy.clearLocalStorage(/prop1|2/).should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.be.null
      expect(ls.getItem('prop3')).to.eq('magenta')
    })
  })

  it('cy.getAllLocalStorage() - get all data in local storage for all origins', () => {
    // https://on.cypress.io/getalllocalstorage
    cy.get('.ls-btn').click()

    // getAllLocalStorage() yields a map of origins to local storage values
    cy.getAllLocalStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if local storage is set on them
        'http://localhost:8080': {
          'prop1': 'red',
          'prop2': 'blue',
          'prop3': 'magenta',
        },
      })
    })
  })

  it('cy.clearAllLocalStorage() - clear all data in local storage for all origins', () => {
    // https://on.cypress.io/clearalllocalstorage
    cy.get('.ls-btn').click()

    // clearAllLocalStorage() yields null
    cy.clearAllLocalStorage().should(() => {
      expect(sessionStorage.getItem('prop1')).to.be.null
      expect(sessionStorage.getItem('prop2')).to.be.null
      expect(sessionStorage.getItem('prop3')).to.be.null
    })
  })

  it('cy.getAllSessionStorage() - get all data in session storage for all origins', () => {
    // https://on.cypress.io/getallsessionstorage
    cy.get('.ls-btn').click()

    // getAllSessionStorage() yields a map of origins to session storage values
    cy.getAllSessionStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if session storage is set on them
        'http://localhost:8080': {
          'prop4': 'cyan',
          'prop5': 'yellow',
          'prop6': 'black',
        },
      })
    })
  })

  it('cy.clearAllSessionStorage() - clear all data in session storage for all origins', () => {
    // https://on.cypress.io/clearallsessionstorage
    cy.get('.ls-btn').click()

    // clearAllSessionStorage() yields null
    cy.clearAllSessionStorage().should(() => {
      expect(sessionStorage.getItem('prop4')).to.be.null
      expect(sessionStorage.getItem('prop5')).to.be.null
      expect(sessionStorage.getItem('prop6')).to.be.null
    })
  })
})
