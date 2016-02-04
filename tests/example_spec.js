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
    cy.visit('http://localhost:8080/')

    // TODO: Replace the url string with your local URL to visit your app.

  })

  it('displays application title [001]', function(){

    // **** Making Assertions ****
    //
    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value
    // Chainers are available from Chai, Chai-jQuery, and Chai-Sinon

    // http://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
    //   ↲               ↲            ↲
    // subject        chainer      value

    // TODO: Replace "Kitchen Sink" with the title of your app.

  })

})

