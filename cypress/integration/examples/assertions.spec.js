/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/assertions')
  })

  describe('Implicit Assertions', () => {

    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('.assertion-table')
        .find('tbody tr:last').should('have.class', 'success')
    })

    it('.and() - chain multiple assertions together', () => {
      // https://on.cypress.io/and
      cy.get('.assertions-link')
        .should('have.class', 'active')
        .and('have.attr', 'href')
        .and('include', 'cypress.io')
    })
  })

  describe('Explicit Assertions', () => {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', () => {
      // We can use Chai's BDD style assertions
      expect(true).to.be.true
      const o = { foo: 'bar' }
      expect(o).to.equal(o)
      expect(o).to.deep.equal({ foo: 'bar' })
    })

    it('pass your own callback function to should()', () => {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      cy.get('.assertions-p').find('p')
      .should(($p) => {
        // return an array of texts from all of the p's
        // @ts-ignore TS6133 unused variable
        const texts = $p.map((i, el) => // https://on.cypress.io/$
          Cypress.$(el).text())

        // jquery map returns jquery object
        // and .get() convert this to simple array
        const paragraphs = texts.get()

        // array should have length of 3
        expect(paragraphs).to.have.length(3)

        // set this specific subject
        expect(paragraphs).to.deep.eq([
          'Some text from first p',
          'More text from second p',
          'And even more text from third p',
        ])
      })
    })

    it('finds element by class name regex', () => {
      cy.get('.scope-classes').find('div')
        // .should(cb) callback function will be retried
        .should(($div) => {
          expect($div).to.have.length(1)

          const classes = $div[0].className
          expect(classes).to.match(/heading-/)
        })
        // .then(cb) callback is not retried,
        // it either passes or fails
        .then(($div) => {
          expect($div).to.have.text('Scoped classes')
        })
    })

    it('assert - assert shape of an object', () => {
      const person = {
        name: 'Joe',
        age: 20,
      }
      assert.isObject(person, 'value is object')
    })
  })
})
