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
    cy.visit('http://localhost:8080/todo')
  })

  it('assert all elements are visible in either of the two tabs', () => {
    cy.get('.todo-list li')
    
  })
})
