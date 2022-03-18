/// <reference types="cypress" />

// First task - write a test

// You're going to test this site http://localhost:8080/todo

// Please write a test where you:
// 1. add a new todo task to the list
// 2. mark the task as completed
// 3. assert that it's completed
// 4. check if this task is visible in 'Completed' tab

describe('First cypress task - Desktop', () => {
  const row = 'li'
  const toDoCheckbox = 'input[type="checkbox"]'
  const list = 'ul'
  const completedTasks = 'a[href="#/completed"]'

  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/todo')
  })

  it('add a new todo item', () => {
    cy.get('section').find('input[data-test="new-todo"]').type('Clean Garage {enter}')
    cy.get(list).find(toDoCheckbox).last().check()
    cy.get(list).find(toDoCheckbox).last().should('be.checked')
    cy.get(list).first().find(row).last().invoke('attr', 'data-id').then((val) => {
      const attrValue = val

      cy.get(completedTasks).click()
      cy.get(list).first().find(row).last().invoke('attr', 'data-id').then((completedValue) => {
        expect(attrValue).to.be.eq(completedValue)
      })
    })
  })
})
