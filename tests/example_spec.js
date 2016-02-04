//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point


// **** Test Structure ****
//
// Cypress has adopted Mocha's bdd syntax.
// https://on.cypress.io/guides/bundled-tools#section-mocha
//

describe('Kitchen Sink [000]', function(){

  beforeEach(function(){

    // **** Resetting State Before Each Test ****
    //
    // Visiting our app before each test
    // removes any state build up from
    // previous tests. Visiting acts as if
    // we closed a tab and opened a fresh one
    //
    // By default Cypress also automatically
    // clears the Local Storage and Cookies
    // before each test.

    // http://on.cypress.io/visit
    // cy.visit('http://cypress-io.github.io/examples-kitchen-sink/')
    cy.visit('http://localhost:8080')

  })

  it('has correct <title> [001]', function(){

    // **** Making Assertions ****
    //
    // Here we've made our first assertion using a 'cy.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.
    // Chainers are available from Chai, Chai-jQuery, and Chai-Sinon.
    // https://on.cypress.io/guides/making-assertions
    //
    // http://on.cypress.io/should
    // http://on.cypress.io/and

    // http://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
    //   ↲               ↲            ↲
    // subject        chainer      value

  })

  context('Querying [002]', function(){

    // Let's query for some DOM elements and make assertions
    // The most commonly used query is "cy.get()", you can
    // think of this like the "$"" in jQueury

    it('use cy.get() to query DOM elements [007]', function(){

      // http://on.cypress.io/get
      // We can get DOM elements by id
      cy.get("#query-btn").should("contain", "Button")

      // We can get DOM elements by class
      cy.get(".query-btn").should("contain", "Button")


      cy.get("#querying .well>button:first").should("contain", "Button")
      //              ↲
      // we can use CSS selectors just like jQuery

    })

    it('use cy.contains() to query DOM elements with matching content [008]', function(){

      // http://on.cypress.io/contains
      cy.contains('bananas').should('have.class', 'third')

    })

    it('use cy.within() to query DOM elements within a specific element [007]', function(){

      // http://on.cypress.io/within

      cy.get("#query-form").within(function(){
        cy.get("input:first").should("have.attr", "placeholder", "Email")
        cy.get("input:last").should("have.attr", "placeholder", "Password")

      })


    })

  })

})

