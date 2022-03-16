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
  let all = 0
  let active = 0
  let completed = 0

  before(() => {
    cy.visit('http://localhost:8080/todo')
    cy.server()
    cy.fixture('task2-mock.json').then((list) => {
      let i = 0

      cy.wrap(list).each((item) => {
        cy.get('[data-test=new-todo]').type(item.title).type('{enter}')
        if (item.completed === true) {
          cy.get('.todo-list').find('li').eq(2 + i).find('input').click()
        }

        i++
      })
    })
  })

  it('count the list of elements in All, Active and Completed tab', () => {
    cy.get('.todo-list').find('li').each(() => {
      all++
    })

    cy.contains('Active').click()
    cy.get('.todo-list').find('li').each(() => {
      active++
    })

    cy.contains('Completed').click()
    cy.get('.todo-list').find('li').each(() => {
      completed++
    })
  })

  it('assert all elements are visible in either of the two tabs', () => {
    assert.equal(all, active + completed, 'All tab equals sum of Active and Completed tab')
  })
})
