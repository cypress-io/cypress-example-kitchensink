context('Files', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080/commands/files')
  })
  it('cy.fixture() - load a fixture', function () {
    // Instead of writing a response inline you can
    // connect a response with a fixture file
    // located in fixtures folder.

    cy.server()

    // https://on.cypress.io/fixture
    cy.fixture('example.json').as('comment')

    cy.route(/comments/, '@comment').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('responseBody')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')

    // you can also just write the fixture in the route
    cy.route(/comments/, 'fixture:example.json').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('responseBody')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')

    // or write fx to represent fixture
    // by default it assumes it's .json
    cy.route(/comments/, 'fx:example').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('responseBody')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })

  it('cy.readFile() - read a files contents', function () {
    // You can read a file and yield its contents
    // The filePath is relative to your project's root.

    // https://on.cypress.io/readfile
    cy.readFile('cypress.json').then(function (json) {
      expect(json).to.be.an('object')
    })

  })

  it('cy.writeFile() - write to a file', function () {
    // You can write to a file with the specified contents

    // Use a response from a request to automatically
    // generate a fixture file for use later
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // https://on.cypress.io/writefile
        cy.writeFile('cypress/fixtures/users.json', response.body)
      })
    cy.fixture('users').should(function (users) {
      expect(users[0].name).to.exist
    })

    // JavaScript arrays and objects are stringified and formatted into text.
    cy.writeFile('cypress/fixtures/profile.json', {
      id: 8739,
      name: 'Jane',
      email: 'jane@example.com',
    })

    cy.fixture('profile').should(function (profile) {
      expect(profile.name).to.eq('Jane')
    })
  })
})
