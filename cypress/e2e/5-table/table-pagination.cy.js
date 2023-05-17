// from Alex
/// <reference types="cypress" />

describe('Table Pagination', () => {
  // Should be able to change number of rows per page
  // Should show selected number of rows per page
  // Should be able to change page using the left and right arrows
  // Should be able to change page by clicking on specific page number
  // Should show appropriate number of pages for selected row count
  // Should show all data for a row
  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed')
    cy.visit(
      'https://www.lambdatest.com/selenium-playground/table-pagination-demo'
    )
  })

  it('Can change the number of rows per page, should update number of pages accordingly', () => {
    const tests = [
      {
        option: 'Show ALL Rows',
        result: 30,
        pages: 2
      },
      {
        option: '5',
        result: 5,
        pages: 8
      },
      {
        option: '10',
        result: 10,
        pages: 5
      },
      {
        option: '15',
        result: 15,
        pages: 4
      },
      {
        option: '20',
        result: 20,
        pages: 4
      },
      {
        option: '30',
        result: 30,
        pages: 2
      }
    ]

    tests.forEach((test) => {
      cy.get('#maxRows')
        .select(test.option)
      // cy.get('#table-id tr:visible:not(:first-child)')
      //   .should('have.length', test.result)
      cy.get('#table-id > tbody > tr:visible')
        .should('have.length', test.result)

      cy.get('.pagination_sp > li')
        .should('have.length', test.pages)
    })
  })

  it('Can use the previous and next page buttons', () => {
    cy.get('#maxRows').select('5')

    cy.get('[data-page=next] > span').click()
    cy.get('[data-page=next] > span').click()

    cy.get('li.active').should('have.attr', 'data-page', '3')
    cy.get('#table-id td:visible:first').should('have.text', '11')

    cy.get('[data-page=prev] > span').click()

    cy.get('li.active').should('have.attr', 'data-page', '2')
    cy.get('#table-id td:visible:first').should('have.text', '6')
  })

  it('Can use a specific page button', () => {
    cy.get('#maxRows').select('5')

    cy.get('[data-page=5] > span').click()

    cy.get('li.active').should('have.attr', 'data-page', '5')

    // the selector selects the first visible line of the table; selector ":visible" is specific to Cypress
    cy.get('#table-id td:visible:first').should('have.text', '21')
    cy.get('#table-id td:visible:last').should('have.text', 'Apr 16, 2016')
  })
})