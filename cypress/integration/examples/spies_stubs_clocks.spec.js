/// <reference types="cypress" />

context('Spies, Stubs, and Clock', () => {
  it('cy.spy() - wrap a method in a spy', () => {
    // https://on.cypress.io/spy
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')

    const obj = {
      foo () {},
    }

    const spy = cy.spy(obj, 'foo').as('anyArgs')

    obj.foo()

    expect(spy).to.be.called
  })

  it('cy.spy() retries until assertions pass', () => {
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')

    const obj = {
      /**
       * Prints the argument passed
       * @param x {any}
      */
      foo (x) {
        /* eslint-disable-next-line no-console */
        console.log('obj.foo called with', x)
      },
    }

    cy.spy(obj, 'foo').as('foo')

    setTimeout(() => {
      obj.foo('first')
    }, 500)

    setTimeout(() => {
      obj.foo('second')
    }, 2500)

    cy.get('@foo').should('have.been.calledTwice')
  })

  it('cy.stub() - create a stub and/or replace a function with stub', () => {
    // https://on.cypress.io/stub
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')

    const obj = {
      /**
       * prints both arguments to the console
       * @param a {string}
       * @param b {string}
      */
      foo (a, b) {
        // eslint-disable-next-line no-console
        console.log('a', a, 'b', b)
      },
    }

    const stub = cy.stub(obj, 'foo').as('foo')

    obj.foo('foo', 'bar')

    expect(stub).to.be.called
  })

  it('cy.clock() - control time in the browser', () => {
    // https://on.cypress.io/clock

    // create the date in UTC so its always the same
    // no matter what local timezone the browser is running in
    const now = new Date(Date.UTC(2017, 2, 14)).getTime()

    cy.clock(now)
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')
    cy.get('#clock-div').click()
      .should('have.text', '1489449600')
  })

  it('cy.tick() - move time in the browser', () => {
    // https://on.cypress.io/tick

    // create the date in UTC so its always the same
    // no matter what local timezone the browser is running in
    const now = new Date(Date.UTC(2017, 2, 14)).getTime()

    cy.clock(now)
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')
    cy.get('#tick-div').click()
      .should('have.text', '1489449600')
    cy.tick(10000) // 10 seconds passed
    cy.get('#tick-div').click()
      .should('have.text', '1489449610')
  })

  it('matches call arguments using Sinon matchers', () => {
    // see all possible matchers at
    // https://sinonjs.org/releases/latest/matchers/
    const calculator = {
      add (a, b) {
        return a + b
      },
    }

    const spy = cy.spy(calculator, 'add').as('add')

    expect(calculator.add(2, 3)).to.equal(5)

    // if we want to assert the exact values used during the call
    expect(spy).to.be.calledWith(2, 3)

    // let's confirm "add" method was called with two numbers
    expect(spy).to.be.calledWith(Cypress.sinon.match.number, Cypress.sinon.match.number)

    // alternatively, provide the value to match
    expect(spy).to.be.calledWith(Cypress.sinon.match(2), Cypress.sinon.match(3))

    // match any value
    expect(spy).to.be.calledWith(Cypress.sinon.match.any, 3)

    // match any value from a list
    expect(spy).to.be.calledWith(Cypress.sinon.match.in([1, 2, 3]), 3)

    // expect the value to pass a custom predicate function
    expect(spy).to.be.calledWith(Cypress.sinon.match(Cypress._.isNumber), 3)
  })
})
