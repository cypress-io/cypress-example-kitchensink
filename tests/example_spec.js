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

  it('cy.should - assert that <title> is correct [001]', function(){

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
    // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQueury

    it('cy.get() - query DOM elements [007]', function(){

      // http://on.cypress.io/get
      // We can get DOM elements by id
      cy.get('#query-btn').should('contain', 'Button')

      // We can get DOM elements by class
      cy.get('.query-btn').should('contain', 'Button')


      cy.get('#querying .well>button:first').should('contain', 'Button')
      //              ↲
      // we can CSS selectors just like jQuery

    })

    it('cy.contains() - query DOM elements with matching content [008]', function(){

      // http://on.cypress.io/contains
      cy.get('.query-list').contains('bananas').should('have.class', 'third')

    })

    it('cy.within() - query DOM elements within a specific element [007]', function(){

      // http://on.cypress.io/within
      cy.get('#query-form').within(function(){
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')

      })

    })

    it('cy.root() - query the root DOM element [007]', function(){

      // http://on.cypress.io/root

      // By default, root is the document
      cy.root().should('match', 'html')

      cy.get('#query-ul').within(function(){

        // In this within, the root is now the ul DOM element
        cy.root().should('have.id', 'query-ul')

      })

    })

  })

  context('DOM Traversal [009]', function(){

    // Let's query for some DOM elements and make assertions
    // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQueury

    it('cy.children() - get child DOM elements [00a]', function(){

      // http://on.cypress.io/children
      cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data')

    })

    it('cy.closest() - get closest ancestor DOM element [00c]', function(){

      // http://on.cypress.io/closest
      cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')

    })

    it('cy.eq() - get a DOM element at a specific index [00d]', function(){

      // http://on.cypress.io/eq
      cy.get('.traversal-list>li').eq(1).should('contain', 'siamese')

    })

    it('cy.filter() - get DOM elements that match the selector [00b]', function(){

      // http://on.cypress.io/filter
      cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')

    })

    it('cy.find() - get descendant DOM elements of the selector [00e]', function(){

      // http://on.cypress.io/find
      cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)

    })

    it('cy.first() - get first DOM element [00f]', function(){

      // http://on.cypress.io/first
      cy.get('.traversal-table td').first().should('contain', '1')

    })

    it('cy.last() - get last DOM element [00g]', function(){

      // http://on.cypress.io/last
      cy.get('.traversal-buttons .btn').last().should('contain', 'Submit')

    })

    it('cy.next() - get next sibling DOM element [00g]', function(){

      // http://on.cypress.io/next
      cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges')

    })

    it('cy.not() - remove DOM elements from set of DOM elements [00g]', function(){

      // http://on.cypress.io/not
      cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled')

    })

    it.only('cy.parents() - get parents DOM element from set of DOM elements [00g]', function(){

      // http://on.cypress.io/parents
      cy.get('.traversal-cite').parents().should('match', 'blockquote')

    })


  })

})

