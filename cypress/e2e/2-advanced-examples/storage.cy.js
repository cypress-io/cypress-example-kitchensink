/// <reference types="cypress" />

// the page's values from cy.getAllLocalStorage() or cy.getAllSessionStorage(), since the test
// can't read the page's storage directly when the page is on another origin than the test
const pageStorage = (storageMap) => storageMap['http://localhost:8080'] ?? {}

context('Local Storage / Session Storage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/storage')
  })
  // Although localStorage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear localStorage manually

  it('cy.clearLocalStorage() - clear all data in localStorage for the current origin', () => {
    // https://on.cypress.io/clearlocalstorage
    cy.get('.ls-btn').click()
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.eq('red')
      expect(pageStorage(storage).prop2).to.eq('blue')
      expect(pageStorage(storage).prop3).to.eq('magenta')
    })

    cy.clearLocalStorage()
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.be.undefined
      expect(pageStorage(storage).prop2).to.be.undefined
      expect(pageStorage(storage).prop3).to.be.undefined
    })

    cy.get('.ls-btn').click()
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.eq('red')
      expect(pageStorage(storage).prop2).to.eq('blue')
      expect(pageStorage(storage).prop3).to.eq('magenta')
    })

    // Clear key matching string in localStorage
    cy.clearLocalStorage('prop1')
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.be.undefined
      expect(pageStorage(storage).prop2).to.eq('blue')
      expect(pageStorage(storage).prop3).to.eq('magenta')
    })

    cy.get('.ls-btn').click()
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.eq('red')
      expect(pageStorage(storage).prop2).to.eq('blue')
      expect(pageStorage(storage).prop3).to.eq('magenta')
    })

    // Clear keys matching regex in localStorage
    cy.clearLocalStorage(/prop1|2/)
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.be.undefined
      expect(pageStorage(storage).prop2).to.be.undefined
      expect(pageStorage(storage).prop3).to.eq('magenta')
    })
  })

  it('cy.getAllLocalStorage() - get all data in localStorage for all origins', () => {
    // https://on.cypress.io/getalllocalstorage
    cy.get('.ls-btn').click()

    // getAllLocalStorage() yields a map of origins to localStorage values
    cy.getAllLocalStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if localStorage is set on them
        'http://localhost:8080': {
          prop1: 'red',
          prop2: 'blue',
          prop3: 'magenta',
        },
      })
    })
  })

  it('cy.clearAllLocalStorage() - clear all data in localStorage for all origins', () => {
    // https://on.cypress.io/clearalllocalstorage
    cy.get('.ls-btn').click()

    // clearAllLocalStorage() yields null
    cy.clearAllLocalStorage()
    cy.getAllLocalStorage().should((storage) => {
      expect(pageStorage(storage).prop1).to.be.undefined
      expect(pageStorage(storage).prop2).to.be.undefined
      expect(pageStorage(storage).prop3).to.be.undefined
    })
  })

  it('cy.getAllSessionStorage() - get all data in sessionStorage for all origins', () => {
    // https://on.cypress.io/getallsessionstorage
    cy.get('.ls-btn').click()

    // getAllSessionStorage() yields a map of origins to sessionStorage values
    cy.getAllSessionStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if sessionStorage is set on them
        'http://localhost:8080': {
          prop4: 'cyan',
          prop5: 'yellow',
          prop6: 'black',
        },
      })
    })
  })

  it('cy.clearAllSessionStorage() - clear all data in sessionStorage for all origins', () => {
    // https://on.cypress.io/clearallsessionstorage
    cy.get('.ls-btn').click()

    // clearAllSessionStorage() yields null
    cy.clearAllSessionStorage()
    cy.getAllSessionStorage().should((storage) => {
      expect(pageStorage(storage).prop4).to.be.undefined
      expect(pageStorage(storage).prop5).to.be.undefined
      expect(pageStorage(storage).prop6).to.be.undefined
    })
  })
})
