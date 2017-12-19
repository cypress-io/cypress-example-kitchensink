context('Aliasing', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080/commands/aliasing')
  })

  // We alias a DOM element for use later
  // We don't have to traverse to the element
  // later in our code, we just reference it with @

  it('.as() - alias a route or DOM element for later use', function () {
    // this is a good use case for an alias,
    // we don't want to write this long traversal again

    // https://on.cypress.io/as
    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first().find('button').as('firstBtn')

    // maybe do some more testing here...

    // when we reference the alias, we place an
    // @ in front of it's name
    cy.get('@firstBtn').click()

    cy.get('@firstBtn')
      .should('have.class', 'btn-success')
      .and('contain', 'Changed')
  })
})
