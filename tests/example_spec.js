// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// **** BDD Syntax ****
//
// Cypress has adopted Mocha's bdd syntax.
// Tests support Mocha blocks and hooks including:
//
// describe()
// context()
// it()
// before()
// beforeEach()
// afterEach()
// after()
// .only()
// .skip()
//

// Create a describe block for our application tests
describe('Kitchen Sink [000]', function(){

  beforeEach(function(){

    // **** State Before Each Test ****
    //
    // By default Cypress automatically
    // clears the Local Storage  and Cookies
    // before each test
    //
    // We want to freshly visit our app
    // before each test to remove any
    // state buildup we may have

    // http://on.cypress.io/visit

    // cy.visit('http://cypress-io.github.io/examples-kitchen-sink/')
    cy.visit('http://localhost:8080')

    // TODO: Replace the url string with your locally hosted URL
    //       to visit your app (like http://localhost:8080).

  })

  it('displays application title [001]', function(){

    // **** Making Assertions ****
    //
    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value
    // Chainers are available from Chai, Chai-jQuery, and Chai-Sinon
    //
    // http://on.cypress.io/should
    // http://on.cypress.io/and

    // http://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
    //   ↲               ↲            ↲
    // subject        chainer      value

    // TODO: Replace "Kitchen Sink" with the title of your app.

  })

  context('Querying [002]', function(){

    // Let's query for some DOM elements and make assertions
    // The most commonly used query is "cy.get()", you can
    // think of this like the "$"" in jQueury

    it('use cy.get() to query DOM elements [007]', function(){

      // http://on.cypress.io/get
      cy.get('p:nth-of-type(1)').should('contain', 'To query for this DOM element')
      //              ↲
      // we can use CSS selectors just like jQuery

      // we can get elements by their ID
      cy.get('#id-example').should('contain', 'We can get elements')

      // we can get elements by their class
      cy.get('.class-example').should('contain', 'We can get elements')


    })

    it('use cy.contains() to query DOM elements with matching content [008]', function(){

      // http://on.cypress.io/get
      cy.contains('We can find elements by their content').should('contain', 'We can find elements by their content')
      //              ↲
      // we can use CSS selectors just like jQuery

      // we can get elements by their ID
      cy.contains('Shazam').should('contain', 'Shazam Three')

    })

  })

})

