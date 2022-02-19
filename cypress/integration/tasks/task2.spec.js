/// <reference types="cypress" />
import 'cypress-localstorage-commands'

// Second task - mocking and fixing

// You're going to test this site http://localhost:8080/todo

// Please write a test:
// 1. prepare the initial list of tasks (tip: use the mock prepared)
// 2. count the list of elements in All tab
// 3. count the list of elements in Active tab
// 4. count the list of elements in Completed tab
// 5. verify if the number from 2nd step equals to the sum of the other 2 numbers

describe('Second cypress task', () => {
  before(() => {
    //
    cy.fixture('task2-mock').then((json) => {
      cy.setLocalStorage('todos-vanillajs', JSON.stringify(json))
    })

    //
    cy.visit('http://localhost:8080/todo')
  })

  it('assert all elements are visible in either of the two tabs', () => {
    cy.get('.todo-list li')
    //
    cy.get('.todo-list li').then((allList) => {
      const allLength = allList.length

      cy.contains('Active').click()
      cy.get('.todo-list li').then((activeList) => {
        const activeLength = activeList.length

        cy.contains('Completed').click()
        cy.get('.todo-list li').then((completedList) => {
          const completedLength = completedList.length

          cy.log('allLength: ', allLength)
          cy.log('activeLength: ', activeLength)
          cy.log('completedLength: ', completedLength)
          expect(allLength).to.eq(activeLength + completedLength)
        })
      })
    })
    //
  })
})
