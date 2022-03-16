/// <reference types="cypress" />

// First task - write a test

// You're going to test this site http://localhost:8080/todo

// Please write a test where you:
// 1. add a new todo task to the list
// 2. mark the task as completed
// 3. assert that it's completed
// 4. check if this task is visible in 'Completed' tab

describe('First cypress task', () => {
  const todos = ['Play a game']

  it('add a new todo item', () => {
    cy.visit('http://localhost:8080/todo')

    cy.get('[data-test=new-todo]').type(todos[0]).type('{enter}')
    cy.get('.todo-list').find('li').eq(2).find('input').click()
    cy.get('.todo-list').find('li').eq(2).should('have.class', 'completed')
    cy.contains('Completed').click()
    cy.get('.todo-list').each((item, index) => {
      cy.wrap(item).should('contain.text', todos[index])
    })
  })

  /*it('mark the task as completed', () => {
    cy.get('.todo-list').find('li').eq(2).find('input').click()
  })

  it('assert that it\'s completed', () => {
    cy.get('.todo-list').find('li').eq(2).should('have.class', 'completed')
  })

  it('check if this task is visible in \'Completed\' tab', () => {
    cy.contains('Completed').click()
    cy.get('.todo-list').each((item, index) => {
      cy.wrap(item).should('contain.text', todos[index])
    })
  })*/
})
